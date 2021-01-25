import axios from "axios"
import { useQuery } from "react-query"
import { RingLoader } from "react-spinners"
import { useTheme, makeStyles, Button } from "@material-ui/core"
import { v4 } from "uuid"
import GithubIMG from "../images/github.png"
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined'


const useStyles = makeStyles(theme => ({
    cardsContainer: {
        maxWidth: "1000px",
        display: "flex",
        flexWrap: "wrap",
        flexBasis: "100px",
        margin: "20px auto",
    },
    card: {
        backgroundColor: () => {
            return theme.palette.primary.main + "60"
        },
        margin: "40px auto",
        width: "400px",
        height: "600px",
        color: theme.palette.text.primary,
        boxShadow: () => {
            return `10px 10px 10px ${theme.shadow}`
        },
        backdropFilter: "blur(3px)",
        borderRadius: "10px",
    },

    projectTitle: {
        padding: "15px",
        margin: 0
    },

    projectList: {
        "& li": {
            listStyleType: "none",
            textAlign: "left",
            margin: "10px auto"
        }
    },
    urlButton: {
        color: theme.palette.primary.main,
        border: "1px solid black"
    }
}))

const fetchData = async (QueryKey) => {
    return await axios.get("https://yaseenfsd-api.herokuapp.com/")
}

const openURLnewTab = (URL) => {
    window.open(URL)
}

export const Projects = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const { data: results, isError, isLoading, error } = useQuery("projectsData", fetchData)
    if (isLoading) {
        return (<RingLoader color={theme.palette.primary.main} loading={true} css={{ display: "block", margin: "0 auto", padding: "20px" }} />)
    }
    if (isError) {
        console.log(error)
        return (<div>{error.message}</div>)
    }
    // console.log(results)
    return (<div className={classes.cardsContainer}>
        {results.data.sort((a, b) => b.project_level - a.project_level).map((project) => {
            return (<div key={v4()} style={{ minWidth: "450px", margin: "0 auto" }}>
                {/* This parent div is used to avoid margin collapsing while keeping it centered with 'margin 0 auto' */}
                <div className={classes.card}>
                    <h3 className={classes.projectTitle}>{project.name}</h3>
                    <img style={{ width: "inherit" }} src={`https://${project.img_url}`} alt={`Project ${project.name}`} />
                    <ul className={classes.projectList}>
                        <li key={v4()}>
                            <div>
                                <Button className={classes.urlButton} onClick={() => openURLnewTab(`https://${project.repo_link}`)}><img style={{ width: "20px" }} src={GithubIMG} alt="Github Icon" />Github URL
                                </Button>
                                {project.website_url ? <><Button className={classes.urlButton}
                                    onClick={() => openURLnewTab(`https://${project.web}`)}>
                                    <LiveTvOutlinedIcon /> Live
                                </Button></> : null}
                            </div>
                        </li>
                        <li key={v4()}>Team size: {project.team_count}</li>
                        <li key={v4()}>Main Language: {project.main_language}</li>
                        <li key={v4()}>
                            Some Technologies used:<ul>
                                {project.techs_used.map((tech) => (<li key={v4()} style={{ listStyleType: "initial" }}>{tech}</li>))}
                            </ul>
                        </li>
                        <li key={v4()}>

                        </li>
                    </ul>
                </div>
            </div>)
        })}
    </div>)
}
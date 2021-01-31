import { useState } from "react"
import { v4 } from "uuid"
import { makeStyles, Button } from "@material-ui/core"
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined'
import GithubIMG from "../images/github.png"

const CARDSIZE = 520
const MINCARDSIZE = 255

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.primary.main + "B9",
        margin: "40px auto",
        width: "90%",
        minWidth: MINCARDSIZE + "px",
        maxWidth: CARDSIZE + "px",
        minHeight: "650px",
        height: "fit-content",
        color: theme.palette.text.secondary,
        boxShadow: `10px 10px 10px ${theme.shadow}`,
        borderRadius: "10px",
    },

    projectTitle: {
        padding: "15px",
        margin: 0
    },

    projectList: {
        padding: "20px",
        margin: "10px",
        "& li": {
            listStyleType: "none",
            textAlign: "left",
            margin: "10px auto"
        }
    },
    urlButton: {
        color: "blue",
        border: "1px solid black"
    },
    closedParagraph: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    openParagraph: {
        paddingBottom: "25px",
    },
    shrinkOrExpand: {
        paddingBottom: "10px",
        textAlign: "center",
        cursor: "pointer",
        color: "blue",
        fontSize: "20px"
    }

}))



export const Project = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const classes = useStyles()

    const openURLnewTab = (URL) => {
        window.open(URL)
    }

    const expand = () => {
        setIsExpanded(true)
    }

    const shrink = () => {
        setIsExpanded(false)
    }
    return (<div style={{ minWidth: `${MINCARDSIZE + 50}px`, margin: "0 auto", }}>
        {/* This parent div is used to avoid margin collapsing while keeping it centered with 'margin 0 auto' */}
        <div className={classes.card}>
            <h3 className={classes.projectTitle}>{data.name}</h3>
            <img style={{ width: "100%" }} src={`https://${data.img_url}`} alt={`Project ${data.name}`} />
            <ul className={classes.projectList}>
                <li key={v4()}>
                    <div>
                        <Button className={classes.urlButton} onClick={() => openURLnewTab(`https://${data.repo_link}`)}><img style={{ width: "20px" }} src={GithubIMG} alt="Github Icon" />Github URL
                </Button>
                        {data.website_url ? <Button className={classes.urlButton}
                            onClick={() => openURLnewTab(`https://${data.website_url}`)}>
                            <LiveTvOutlinedIcon /> Live
                </Button> : null}
                    </div>
                </li>
                <li key={v4()}>Team size: {data.team_count}</li>
                <li key={v4()}>Description: {data.description}</li>
                <li key={v4()}>Main Language: {data.main_language}</li>
                <li key={v4()}>
                    Some Technologies used:<ul>
                        {data.techs_used.map((tech) => (<li key={v4()} style={{ listStyleType: "initial" }}>{tech}</li>))}
                    </ul>
                </li>
                <li key={v4()}>
                    <div>More info:

                            <p className={isExpanded ? classes.openParagraph : classes.closedParagraph}>{data.more_info}</p>
                        <div style={{textAlign: "center"}}>
                            {
                                isExpanded ? <span  className={classes.shrinkOrExpand} onClick={shrink}>Shrink</span> : <span className={classes.shrinkOrExpand} onClick={expand}>Expand</span>
                            }
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>)
}
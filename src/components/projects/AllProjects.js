import {Project} from "./Project"
import axios from "axios"
import { useQuery } from "react-query"
import { RingLoader } from "react-spinners"
import { useTheme, makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    cardsContainer: {
        maxWidth: "1200px",
        display: "flex",
        flexWrap: "wrap",
        flexBasis: "100px",
        margin: "20px auto",
    },
}))

const fetchData = async (QueryKey) => {
    return await axios.get("https://yaseenfsd-api.herokuapp.com/")
}


export const AllProjects = (props) => {
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
    return (<div className={classes.cardsContainer}>
        {results.data.sort((a, b) => b.project_level - a.project_level).map(project => <Project key={project._id} data={project}/>)}
    </div>)
}
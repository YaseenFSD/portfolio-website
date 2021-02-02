import { makeStyles } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
        padding: "60px 0 200px 0",
        margin: "60px auto",
    },
    url: {
        textAlign: "center",
        verticalAlign: "middle",

    },
    styleCredits: {
        fontFamily: "Roboto Slab",
        paddingBottom: "48px",
        fontSize: "x-large"
    },
    hyperLinkContainers: {
        display: "block",
    }
}))
export const Footer = () => {
    const classes = useStyles()

    return (<footer className={classes.root}>
        <div className={classes.styleCredits}>
            Styled using Material UI
        </div>
        <div>
            <div className={classes.url}>
                <div className={classes.hyperLinkContainers}>

                    <LinkedInIcon style={{ top: "3px", position: "relative" }} />
                    <a href="https://www.linkedin.com/in/yaseenfsd/">linkedin.com/in/yaseenfsd</a>
                </div>

                <div className={classes.hyperLinkContainers} >
                    <GitHubIcon style={{ top: "3px", position: "relative" }} />
                    <a href="https://github.com/YaseenFSD">github.com/YaseenFSD</a>
                </div>
            </div>
        </div>
    </footer>)
}
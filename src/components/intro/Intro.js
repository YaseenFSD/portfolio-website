import { makeStyles } from '@material-ui/core/styles';
import VectorDrawing from "../images/drawing.png"

const useStyles = makeStyles(theme => ({
    preSummary : {

    },
    imgHolder : {
        width: "200px",
        height: "200px",
        backgroundColor: "#d3d3d360",
        margin:"0px auto",
        borderRadius: "50%",
    },
    projectSummary: {
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        margin: "50px auto",
        color: theme.palette.text.secondary,
        padding: "12px 0 20px 0px"
    },
        
    header: {
        color: theme.palette.text.primary,
        marginBottom: "30px"
    },

    projectIntro: {
        paddingTop: "60px"
    }
}))

export default function Intro(){
    const classes = useStyles()
    return (<>
    <h2 className={classes.header}>Full Stack Developer (React.js and Node.js)</h2>
    <div className={`${classes.preSummary}`}>
        <img className={classes.imgHolder} src={VectorDrawing} alt="Drawing of Yaseen" />
    </div>
    <div className={classes.projectSummary}>
        <h2>About the techs I'm using and learning</h2>
        <p>I started off by learning HTML, CSS, JavaScript. I then got introduced to a whole new world of Node.js and React.js and I have enjoyed them a lot. I am still learning other technologies to explore more options and see what else I like. </p>
        <p>Currently learning AWS.</p> 
        <h3 className={classes.projectIntro}>Here are some of the projects that I am proud of making.</h3>
    </div>
    </>)
}
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    preSummary : {

    },
    imgHolder : {
        display: "flex",
        width: "200px",
        height: "200px",
        backgroundColor: "#d3d3d360",
        margin:"30px auto",
        borderRadius: "50%",
        textAlign: "center",
        verticalAlign: "middle",
        alignItems: "center",
        justifyContent: "center"
    },
    projectSummary: {
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        margin: "50px auto",
        color: theme.palette.text.secondary,
        padding: "70px 0px"
    },
        
    header: {
        color: theme.palette.text.primary,
    }
}))

export default function Intro(){
    const classes = useStyles()
    return (<>
    <h2 className={classes.header}>Full Stack Developer (React.js and Node.js)</h2>
    <div className={`${classes.preSummary}`}>
        <div className={classes.imgHolder}>Image holder</div>
    </div>
    <div className={classes.projectSummary}>
        <h2>Have Ya-seen my projects?</h2>
        <p>Yes I love puns just as much as I love tech</p><p>. amet consectetur adipisicing elit. Vel aut, ab repellendus provident et dolorem similique ipsum sit, aliquid corrupti ex repellat officia, omnis obcaecati unde! Recusandae ut nisi cum.</p>
        <p>Adipisci vero dicta atque voluptatibus magnam distinctio fuga, nobis iure temporibus. Molestiae, ipsam reiciendis, earum recusandae rerum incidunt soluta consequatur labore similique sunt beatae. Saepe magni tempore modi deserunt aperiam!</p>
        <p>Temporibus iste dicta consequuntur sit deleniti non et animi similique! Nisi reiciendis hic officiis, nobis fugiat illo error? Iusto voluptatibus sunt architecto nihil magni porro sapiente fugit saepe cumque eos!</p>
        <p>Velit sapiente deserunt ea neque, beatae ipsam minima vero eius obcaecati enim delectus qui fuga atque tenetur minus modi. Soluta esse tenetur perferendis nobis! Distinctio necessitatibus quod deleniti consectetur sit?</p>
    </div>
    </>)
}
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from "@material-ui/icons/Menu"



const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  appBarSize: {
    height: "60px"
  },

  iconButton: {
    color: theme.palette.text.secondary,
  },

  flexChildMiddle: {
    flexGrow: 6
  },
  flexChildSide: {
    flex: "0 0 300px",
  },
  flexChildRightSide: {
    textAlign: "right"
  },

  flexChildLeftSide: {
    textAlign: "left",
    paddingLeft: "20px", 
  },
  content: {
    textAlign: "center",
  }
}))


export default function MyAppBar({themeToggler}) {
  const classes = useStyles()


  return (
    <div className={`${classes.appBarSize}`}>
      <AppBar className={`${classes.appBar} ${classes.appBarSize}`}>
        <div className={`${classes.flexChildSide} ${classes.flexChildLeftSide}`}>
          Logo
        </div>
        <div className={classes.flexChildMiddle}><div className={classes.content}>Title</div></div>
        <div className={`${classes.flexChildSide} ${classes.flexChildRightSide}`}>
          <IconButton className={classes.iconButton}
            onClick={themeToggler}>
            Toggle theme here
          </IconButton>
        </div>
      </AppBar>
    </div>)
}
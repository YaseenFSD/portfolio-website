import { APPBARHEIGHT } from "../../constants"
import { DarkModeHint } from "../dark-mode-hint"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';

const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 0
  },

  appBarSize: {
    height: APPBARHEIGHT + "px"
  },

  iconButton: {
    color: theme.palette.text.secondary,
  },

  flexChildMiddle: {
    flex: "1 1 auto",
  },
  flexChildSide: {
    flex: "0 0 70px",
  },
  flexChildRightSide: {
    textAlign: "right",
  },

  flexChildLeftSide: {
    textAlign: "left",
    marginLeft: "20px",
  },
  content: {
    textAlign: "center",
  }
}))


export default function MyAppBar({ themeToggler }) {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <div className={`${classes.appBarSize}`}>
      <AppBar className={`${classes.appBar} ${classes.appBarSize}`}>
        <div className={`${classes.flexChildSide} ${classes.flexChildLeftSide}`}>
          Logo
        </div>
        <div className={classes.flexChildMiddle}><h1 className={classes.content}>YaseenFSD</h1></div>
        <div className={`${classes.flexChildSide} ${classes.flexChildRightSide}`}>
          <IconButton className={classes.iconButton}
            onClick={themeToggler}>
            {theme.palette.type === "light" ? <Brightness3RoundedIcon /> : <WbSunnyRoundedIcon />}
          </IconButton>
         <DarkModeHint />
        </div>
      </AppBar>
    </div>)
}
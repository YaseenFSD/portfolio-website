import { useState, useEffect } from "react"
import { APPBARHEIGHT } from "../../constants"
import { Popper, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  popperContent: {
    position: "inherit",
    width: "60px",
    padding: "10px",
    border: "1px solid cyan",
    top: `${APPBARHEIGHT - 5}px`,
    right: "10px",
    borderRadius: "13px",
    backgroundColor: "#1e1e1e",
    color: "white"
  },
  popperTriangle: {
    width: 0,
    height: 0,
    borderLeft: "12px solid transparent",
    borderBottom: "12px solid cyan",
    top: "-12px",
    right: "9px",
    position: "absolute"
  }
}))
export const DarkModeHint = () => {
  const [visible, setVisible] = useState(!(localStorage.getItem("theme")), true)
  const classes = useStyles()
  useEffect(() => {
    let fadeOut = setInterval(() => setVisible(false), 4500)
    return () => {
      clearInterval(fadeOut)
    }
  }, [])
  return (
    <Popper open={true} transition position="bottom-end">
      <Fade in={visible} timeout={500}>
        <div className={classes.popperContent}>Click here to toggle dark mode
          <div className={classes.popperTriangle}></div>
        </div>
      </Fade>
    </Popper>
  )
}
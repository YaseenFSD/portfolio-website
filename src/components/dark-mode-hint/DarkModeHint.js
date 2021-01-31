import { useState, useEffect } from "react"
import { APPBARHEIGHT } from "../../constants"
import { Popper, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  popperContent: {
    position: "inherit",
    width: "60px",
    padding: "10px",
    border: "1px solid black",
    top: `${APPBARHEIGHT - 5}px`,
    right: "10px",
    borderRadius: "13px",
    backgroundColor: "grey"
  },
  popperTriangle: {
    width: 0,
    height: 0,
    borderLeft: "12px solid transparent",
    borderBottom: "12px solid grey",
    top: "-12px",
    right: "9px",
    position: "absolute"
  }
}))
export const DarkModeHint = (props) => {
  const [visible, setVisible] = useState(!(localStorage.getItem("theme")), true)
  const classes = useStyles()
  useEffect(() => {
    let fadeOut = setInterval(() => setVisible(false), 5000)
    return () => {
      clearInterval(fadeOut)
    }
  }, [])
  console.log(props)
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
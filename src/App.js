import { useState } from "react"
import Particles from "react-particles-js"
import { ReactQueryDevtools } from "react-query/devtools"
import particlesDark from "./particlesDark.json"
import particlesLight from "./particlesLight.json"
import { darkTheme, lightTheme } from "./components";
import { MyAppBar, AllProjects, Intro } from "./components"
import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(({
  mainContainer: {
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: (props => props.palette.primary.main),
      borderRadius: "20px"
    }
  }
}))


function App() {
  const [theme, setTheme] = useState("dark")
  const currentTheme = createMuiTheme(theme === "light" ? lightTheme : darkTheme)
  const classes = useStyles(currentTheme)
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (<ThemeProvider theme={currentTheme} >
    <div className="App">
      <MyAppBar themeToggler={themeToggler} />
      <Particles params={theme === "light" ? particlesLight : particlesDark} />
      <div className={`main-container ${classes.mainContainer}`} >
        <Intro />

        <AllProjects />
        {/* // TODO: add footer  */}
        <div style={{ height: "200px" }}></div>
        {/* // ! No content put after this div will show on page*/}
      </div>
    </div>
    <ReactQueryDevtools />
  </ThemeProvider>
  );
}

export default App;

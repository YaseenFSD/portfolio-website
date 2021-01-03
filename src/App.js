import { useState } from "react"
import Particles from "react-particles-js"
import particlesDark from "./particlesDark.json"
import particlesLight from "./particlesLight.json"
import { darkTheme, lightTheme } from "./components/styles/Themes";
import MainDrawer from "./components/drawer/Drawer"
import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import AppBar from "./components/app-bar/AppBar"
import './App.css';


function App() {
  const [theme, setTheme] = useState("dark")
  // const [isDrawerOpen, setDrawerOpen] = useState(true)
  const currentTheme = createMuiTheme(theme === "light" ? lightTheme : darkTheme)
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (<ThemeProvider theme={currentTheme} >
    {/* <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}> */}
    {/* {console.log(lightTheme)} */}
    <div className="App">
      {/* <div className="header"><DrawerOpener className="drawer-opener" isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} /></div> */}
      {/* <AppBar /> */}
      <MainDrawer themeToggler={themeToggler}/>
      <Particles params={theme === "light" ? particlesLight : particlesDark} />
      <div className="main-container" >
        {/* <Wrapper theme={theme} className={`main-container ${theme === "dark" ? "dark-theme" : ""}`}> */}

        Scroll Test
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        Scroll Test
        <div style={{height: "200px"}}></div>
        {/* // ! No content put after this div will show on page properly */}
        </div>
    </div>
  </ThemeProvider>
  );
}

export default App;

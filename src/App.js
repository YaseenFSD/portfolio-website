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
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
    {/* <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}> */}
    {/* {console.log(lightTheme)} */}
    <div className="App">
      {/* <div className="header"><DrawerOpener className="drawer-opener" isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} /></div> */}
      {/* <AppBar /> */}
      <MainDrawer />
      <Particles params={theme === "light" ? particlesLight : particlesDark} />
      <div className="main-container" >
        {/* <Wrapper theme={theme} className={`main-container ${theme === "dark" ? "dark-theme" : ""}`}> */}

        <button onClick={themeToggler}>Click here</button>
        Test
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
        Test
        </div>
    </div>
  </ThemeProvider>
  );
}

export default App;

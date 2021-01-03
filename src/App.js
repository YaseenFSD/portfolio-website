import { useState } from "react"
import Particles from "react-particles-js"
import particlesDark from "./particlesDark.json"
import particlesLight from "./particlesLight.json"
import { darkTheme, lightTheme } from "./components/styles/Themes";
import MyAppBar from "./components/app-bar/MyAppBar"
import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import './App.css';


function App() {
  const [theme, setTheme] = useState("dark")
  const currentTheme = createMuiTheme(theme === "light" ? lightTheme : darkTheme)
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (<ThemeProvider theme={currentTheme} >
    <div className="App">
      <MyAppBar themeToggler={themeToggler}/>
      <Particles params={theme === "light" ? particlesLight : particlesDark} />
      <div className="main-container" >
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

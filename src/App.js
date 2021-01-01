import { useState } from "react"
import Particles from "react-particles-js"
import particlesDark from "./particlesDark.json"
import particlesLight from "./particlesLight.json"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/styles/Themes";
import { Button, Wrapper } from "./components/styles/CustomStyles"
import './App.css';



function App() {
  const [theme, setTheme] = useState("dark")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <div className="App">
      <Particles params={theme === "light" ? particlesLight : particlesDark} />
      <Wrapper className="main-container" >
        {/* <Wrapper theme={theme} className={`main-container ${theme === "dark" ? "dark-theme" : ""}`}> */}

        <Button onClick={themeToggler}>Click here</Button>
        Test
        </Wrapper>
    </div>
  </ThemeProvider>
  );
}

export default App;

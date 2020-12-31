import { useState, useEffect } from "react"
// import useWindowSize from "./custom-hooks/useWindowSize"
import Particles from "react-particles-js"
import particleProps from "./particles.json"
import './App.css';

function App() {
  // const { windowWidth, windowHeight } = useWindowSize()
  const [isDarkTheme, setDarkTheme] = useState(true)
  const lightBG = {
    ...particleProps,
    background: {
      color: {
        height: "100%",
        value: "#FFF"
      }
    }
  }

  return (
    <div className="App">
      <Particles params={isDarkTheme ? particleProps : lightBG} />

    </div>
  );
}

export default App;

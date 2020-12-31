import { useState, useEffect } from "react"
// import useWindowSize from "./custom-hooks/useWindowSize"
import Particles from "react-particles-js"
import particlesDark from "./particlesDark.json"
import particlesLight from "./particlesLight.json"
import './App.css';

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false)

  return (
    <div className="App">
        <Particles params={isDarkTheme ? particlesDark : particlesLight} />
        <div className="projects-container">hi
        hi</div>
    </div>
  );
}

export default App;

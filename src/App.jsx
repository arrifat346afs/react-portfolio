import { useState } from "react";
import LodingScreen from "./component/LodingScreen";
import "./index.css";
import NavBar from "./component/NavBar";
import Mobilemanu from "./component/Mobilemanu";
import Home from "./component/sections/Home";
import About from "./component/sections/About";
import Projects from "./component/sections/Projects";
import Contact from "./component/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setManuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LodingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setManuOpen={setManuOpen} />
        <Mobilemanu menuOpen={menuOpen} setManuOpen={setManuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;

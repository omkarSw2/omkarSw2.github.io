// import logo from './logo.svg';
import "./App.css";
import About from "./Componants/AboutSection/About";
import Contact from "./Componants/ContactSection/Contact";
import Home from "./Componants/HomeSection/Home";

import Navbar from "./Componants/Navbar/Navbar";
import Project from "./Componants/ProjectSection/Project";

import Skill from "./Componants/SkillsSection/Skill.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

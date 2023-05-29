// import logo from './logo.svg';
import "./App.css";
import AboutSection from "./Componants/AboutSection";
import ContactSection from "./Componants/ContactSection";
import HomeSection from "./Componants/HomeSection";
import Navbar from "./Componants/Navbar";
import ProjectsSection from "./Componants/ProjectsSection";
import SkillsSection from "./Componants/SkillsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;

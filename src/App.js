
import './App.css';
import About from './Components/About/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skill/Skills';
// import Project from './Components/project/Project';
import Footer from './Components/footer/Footer';
import Github from './Components/Githubstates/GithubCalender';
import Projects from './Components/project/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component} from 'react';
import Menubar from './components/menu-bar/menu-bar.component';
import Profile from './components/profile/profile.component'
import AboutMe from './components/about-me/about-me.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/project.component';
import Resume from './components/resume/resume.component';
import Contact from './components/contact-me/contact.component';
import Social from './components/social-links/socialLinks';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Menubar />
        <Profile />
        <Social />
        <AboutMe />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;

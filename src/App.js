import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component} from 'react';
import Menubar from './components/menu-bar/menu-bar.component';
import Profile from './components/profile/profile.component'
import AboutMe from './components/about-me/about-me.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/project.component';
import Resume from './components/resume/resume.component';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Menubar />
        <Profile />
        <AboutMe />
        <Resume />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;

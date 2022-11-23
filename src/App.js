import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component} from 'react';
import Menubar from './components/menu-bar/menu-bar.component';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Menubar />
      </div>
    );
  }
}

export default App;

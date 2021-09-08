import './App.css';
import {Route,Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navigation from './component/Navigation';
import Contact from './component/Contact';
import Error from './component/Error';
import Persons from './component/Persons';
import Description from './component/Description';
import Data from './PersonsData';



function App() {
  return (
    <div className="App">
      <Navigation/>

      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/persons' component={Persons}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/persons/:id' render={(props) => <Description Data={Data} {...props}/>}/>
        <Route component={Error}/>
      </Switch>
      
      
      
      
    </div>
  );
}

export default App;

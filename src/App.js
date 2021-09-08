import './App.css';
import {Route,Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navigation from './component/Navigation';
import Contact from './component/Contact';
import Error from './component/Error';
import Persons from './component/Persons';
import Description from './component/Description';
import data from './PersonsData';




function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route exact path='/persons' component={Persons}/>
        <Route path='/persons/:id' render={(props) => <Description data={data} {...props}/>}/>
        <Route component={Error}/>
      </Switch>
      
      
      
      
    </div>
  );
}

export default App;

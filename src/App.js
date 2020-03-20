import React, { Component }  from 'react';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './screens/home'
import About from './screens/about'
import Login from './screens/login'
import Info from './screens/info'
class App extends Component { 
  render (){
    return (
      <Router>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </Router>
    );
  }
  
}

export default App;

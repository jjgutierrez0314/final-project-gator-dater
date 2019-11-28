import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route}  from "react-router-dom";
import Profile from './pages/Profile';
import Random from './pages/Random'
import Home from './pages/Home';

const App = () => {
 
  
  return (
        <Switch>
          <Route exact path ="/profile/random" component = {Random}/>
          <Route exact path ="/profile" component = {Profile}/>
          <Route exact path ="/" component = {Home}/>
        </Switch>
  );
}
export default App;
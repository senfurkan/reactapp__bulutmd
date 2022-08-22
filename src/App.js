import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/home';
import Series from './components/pages/series';
import Movies from './components/pages/movies';
import SignUp from './components/pages/signUp';




function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/series' component={Series}/>
            <Route path='/movies' component={Movies}/>
            <Route path='/sign-up' component={SignUp}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;

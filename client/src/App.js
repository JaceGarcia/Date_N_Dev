import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup';
import SignIn from './components/signin';
import GlobalNav from './components/GlobalNav.js';
import RandomUser from './components/RandomUser.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <RandomUser />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup';
import SignIn from './components/signin';
import GlobalNav from './components/GlobalNav.js';
import RandomUser from './components/RandomUser.js';
import UserProfile from './components/UserProfile.js';
import Home from './components/Home.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/user/:id" component={UserProfile}/>
        </div>
      </Router>
    );
  }
}

export default App;

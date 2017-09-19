import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import SignUp from './components/signup';
import SignIn from './components/signin';
import GlobalNav from './components/GlobalNav.js';
import UserProfile from './components/UserProfile.js';
import EditUser from './components/EditUser.js';
import Home from './components/Home.js';
import { setAxiosDefaults } from './util';

class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/user/:id" component={UserProfile}/>
          <Route exact path="/user/:id/edit" component={EditUser}/>
        </div>
      </Router>
    );
  }
}

export default App;

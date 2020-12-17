import './App.css';
import React from 'react'

import Login from './components/Login'
import FriendList from './components/FriendList'
import Friend from './components/Friend'
import PrivateRoute from './components/PrivateRoute'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


function App () {
  return (
    <Router>
      <div>
      <Switch>
        <PrivateRoute exact path='/api/friends' component={FriendList}/>
        <Route exact path='/api/friends/:id' component={Friend}/>
        <Route exact path='/' component={Login}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

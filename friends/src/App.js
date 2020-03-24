import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList}/>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;

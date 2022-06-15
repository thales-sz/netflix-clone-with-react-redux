import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    );
  }
}

export default App;

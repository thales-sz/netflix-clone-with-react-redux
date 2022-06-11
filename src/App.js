import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Link to="/">LOGIN - </Link>
        <Link to="/home">HOME</Link>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path='/home' component={ Home }/> */}
        </Switch>
      </>
    );
  }
}


export default App;

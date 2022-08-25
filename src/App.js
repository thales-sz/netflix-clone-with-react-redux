import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Login/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/profile' element={ <Profile/> } />
      </Routes>
    );
  }
}

export default App;

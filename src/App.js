import React, { useState } from 'react';
import './App.css';
import Register from './components/form/Register';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/form/Login';
import InitialPage from './components/init/InitialPage';
import MarcarCorte from './components/home/marcar/Marcar';
import Developer from './components/home/marcar/desenvolvendo/desenvolvendo';

function App() {
  

  return (
    <Router>
          <Routes>
            <Route element={<InitialPage />} path='/'/>
            <Route element={<Register />} path='/register' />
            <Route element={<Login />} path='/login' />
            <Route element={<Home/>} path='/home' />
            <Route element={<MarcarCorte/>} path='/marcar' />
            <Route element={<Developer/>} path='/dev' />
          </Routes>
        </Router>
  );
}

export default App;

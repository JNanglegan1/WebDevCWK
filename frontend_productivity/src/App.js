// App.js
// Has all of the routes
// Import React with effects and state
import React, { useState, useEffect } from 'react';

// Import from react-bootstrap
import "bootstrap/dist/css/bootstrap.css";

//Import CSS
import './App.css';

// Import from react-router-dom
import { BrowserRouter, Navigate, Router, Route, Routes } from 'react-router-dom';

// Import RouteGuard for route protection
// If a user is not logged in then certain pages can't be accessed
//import RouteGuard from "./components/RouteGuard.js";
//import {history} from './components/History.js';

//Import React Components
import Home from './components/Home.js';
import About from './components/About.js';
import Boards from './components/BoardSelection.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Project from './components/ProjectBoard.js';



function App() {
  return (
    <div className="App">
    <header className="Main Header">
        <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">☆Productivity App☆</a>
        </div>
        <ul class="navbar-nav">
          <li class="active"><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/boards">Project Boards</a></li>
          <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
      </header>

<BrowserRouter> {/*history={history}>*/}
<Routes>
  <Route path='/home' element={<Home /> } />
  <Route path='/about' element={<About /> } />
  <Route path='/boards' element={<Boards /> } />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/boards/:projectId/project" element={<Project />} />
</Routes>
</BrowserRouter>

</div>
  );
}

export default App;

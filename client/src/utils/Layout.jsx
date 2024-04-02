import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Research from '../pages/Research.jsx';
import Team from '../pages/Team.jsx';
import Login from '../pages/Login.jsx';

function Layout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Team />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Research />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Layout;


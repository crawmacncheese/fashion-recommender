import React from 'react';
import './App.css';

// import router dependency
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages to be imported for react router to route to
import Home from './pages/Home.jsx';
import Concept from './pages/Concept.jsx';
import Research from './pages/Research.jsx';
import Team from './pages/Team.jsx';
import Login from './pages/Login.jsx';
import LandingPage from './protected-pages/LandingPage.jsx';
import Recommender from './pages/Recommender.jsx';
import Outfit from './pages/Outfit.jsx';

// components to be imported
import Navbar from './components/Navbar.jsx';
import VideoBackground from './components/VideoBackground.jsx';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
          path="/"
          element={
            <div>
              <Navbar />
              <VideoBackground />
              <Home />
              <Team />
              <Concept />
              <Research />
              <Login />
            </div>
          }
        />
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/recommender" element={<Recommender/>}/>
        <Route path="/outfit" element={<Outfit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

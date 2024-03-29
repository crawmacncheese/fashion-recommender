import React, {useState, useEffect} from 'react';
import './App.css';

// import router dependency
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages to be imported for react router to route to
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Research from './pages/Research.jsx';
import Team from './pages/Team.jsx'

// components to be imported
import Navbar from './components/Navbar.jsx';

function App() {
  const [message, setMessage] = useState('Hello, World!');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data = setMessage(data.message);
      })
      .catch((error) => {
        console.log('error fetching', error)
      });
  }, []);

  // all of the above code is just to test and make 
  // sure the message from the backend is being read
  // by the front-end

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pt-12">
          <Home />
          <Team />
          <About />
          <Research />
        </div>
      </Router>
    </div>
  );
}

export default App;

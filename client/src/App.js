import React, {useState, useEffect} from 'react';
import './App.css';

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

  return (
    <div className="App">
      <h1>
        {message}
      </h1>
    </div>
  );
}

export default App;

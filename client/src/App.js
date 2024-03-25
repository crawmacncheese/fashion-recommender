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

  // all of the above code is just to test and make 
  // sure the message from the backend is being read
  // by the front-end

  return (
    <div className="App">
      <h1>
        {message}
      </h1>
    </div>
  );
}

export default App;

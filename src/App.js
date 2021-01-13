import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("/api/users")
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;

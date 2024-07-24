import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <form onSubmit={calculateAge}>
        <label htmlFor="birthDate">Enter your birth date:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <button type="submit">Calculate Age</button>
      </form>
      {age !== null && (
        <p className="result">Your age is: {age} years old</p>
      )}
    </div>
  );
}

export default App;
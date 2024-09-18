import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import TicTacToe from './TicTacToe';
import './App.css'; // For styling

function Home() {
  const navigate = useNavigate();

  const handleSelection = (event) => {
    const option = event.target.value;
    if (option === 'calculator') {
      navigate('/calculator');
    } else if (option === 'tic-tac-toe') {
      navigate('/tic-tac-toe');
    }
  };

  return (
    <div className="home">
      <h1>Select an Option</h1>
      <div className="form-container">
        <label>
          <input type="radio" name="option" value="calculator" onChange={handleSelection} />
          Calculator
        </label>
        <br />
        <label>
          <input type="radio" name="option" value="tic-tac-toe" onChange={handleSelection} />
          Tic-Tac-Toe
        </label>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;

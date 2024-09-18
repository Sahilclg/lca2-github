import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input type="text" value={input} readOnly className="calc-input" />
      <div className="calc-result">{result}</div>
      <div className="calc-buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/', '='].map((btn) => (
          <button key={btn} onClick={() => (btn === '=' ? calculate() : handleClick(btn))}>
            {btn}
          </button>
        ))}
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;

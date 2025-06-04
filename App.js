import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [numberId, setNumberId] = useState('p');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNumbers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/numbers/${numberId}`);
      setResult(response.data);
    } catch (error) {
      alert('Failed to fetch data from backend.');
    }
    setLoading(false);
  };
  

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <div className="controls">
        <label>Select Number Type: </label>
        <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button onClick={fetchNumbers} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Numbers'}
        </button>
      </div>

      {result && (
        <div className="result">
          <h2>Response</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
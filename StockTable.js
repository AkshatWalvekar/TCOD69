import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StockTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/stocks') // update endpoint if different
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Stock Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Current Price</th>
            <th>Average</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <tr key={stock.ticker}>
              <td>{stock.ticker}</td>
              <td>{stock.price}</td>
              <td>{stock.avg}</td>
              <td>{stock.stddev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;

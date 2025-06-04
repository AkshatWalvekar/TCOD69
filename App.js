import React from 'react';
import StockTable from './components/StockTable';
import Heatmap from './components/Heatmap';

function App() {
  return (
    <div className="App">
      <h1>Stock Price Aggregation Dashboard</h1>
      <StockTable />
      <Heatmap />
    </div>
  );
}

export default App;

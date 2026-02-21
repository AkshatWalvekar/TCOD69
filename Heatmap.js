import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Heatmap() {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/correlation')
      .then((res) => setHeatmapData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Correlation Heatmap</h2>
      <div className="heatmap">
        {heatmapData.map((row, i) => (
          <div className="row" key={i}>
            {row.map((val, j) => (
              <div key={j} className="cell" style={{ backgroundColor: getColor(val) }}>
                {val.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function getColor(value) {
  const red = Math.round((1 - value) * 255);
  const green = Math.round(value * 255);
  return rgb(${red}, ${green}, 100);
}

export default Heatmap;

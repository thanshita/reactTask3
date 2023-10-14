import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div className="App">
      <h2>Color Picker</h2>
      <SketchPicker color={color} onChange={handleColorChange} />
      <div>
        Selected Color: <span style={{ color: color }}>{color}</span>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import PathFindingVisualizer from './PathFindingVisualizer/PathFindingVisualizer';

function App() {
  const [vizKey,setVizKey] = useState(0); 
  const reset = () => {
    setVizKey(vizKey+1);
  }
  return (
    <div className="App">
      <PathFindingVisualizer key = {vizKey}></PathFindingVisualizer>
    </div>
  );
}

export default App;

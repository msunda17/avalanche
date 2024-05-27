import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [svgContent, setSvgContent] = useState('');

  const handleGenerateSVG = (svg) => {
    setSvgContent(svg);
  };

  return (
    <div className="app">
      <div className="canvas-container">
        <h2 className="title">Canvas</h2>
        <Canvas svgContent={svgContent} />
      </div>
      <div className="chat-container">
        <h2 className="title">Chat</h2>
        <Chat onGenerateSVG={handleGenerateSVG} />
      </div>
    </div>
  );
}

export default App;

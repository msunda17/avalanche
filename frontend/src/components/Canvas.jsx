import React from 'react';
import './Canvas.css';

function Canvas({ svgContent }) {
  return (
    <div className="canvas">
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <p>SVG will be displayed here</p>
      )}
    </div>
  );
}

export default Canvas;

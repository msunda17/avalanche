import React from 'react';

function ImageDisplay() {
  // Placeholder for image URL
  const imageUrl = "logo192.png";

  return (
    <div className="image-frame">
      <img src={imageUrl} alt="Generated from LLM prompt" />
    </div>
  );
}

export default ImageDisplay;

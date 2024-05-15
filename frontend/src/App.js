import React from 'react';
import PromptForm from './PromptForm.js';
import ImageDisplay from './ImageDisplay';
import TokenList from './TokenList';
import './App.css';

function App() {
  return (
    <div className="App">
      <PromptForm />
      <div className="results">
        <div className="image-display">
          <ImageDisplay />
        </div>
        <div className="token-list">
          <TokenList />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function PromptForm() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Prompt: ", prompt);
    // Integration with backend API would typically happen here
  };

  return (
    <form onSubmit={handleSubmit} className="prompt-form">
      <label htmlFor="promptInput">Enter LLM Prompt:</label>
      <textarea
        id="promptInput"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="4"
        placeholder="Type your prompt here..."
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default PromptForm;

import React, { useState } from 'react';
import './Chat.css';

function Chat({ onGenerateSVG }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');
      // Simulate a response from the LLM
      setTimeout(() => {
        const sampleSvg = `
          <svg width="200" height="200">
            <circle cx="100" cy="100" r="80" stroke="black" strokeWidth="3" fill="yellow" />
          </svg>
        `;
        const llmResponse = {
          text: 'This is a response from the LLM.',
          svgCode: sampleSvg,
          sender: 'llm',
          hasButton: true,
        };
        setMessages(prevMessages => [...prevMessages, llmResponse]);
      }, 1000);
    }
  };

  const handleGenerateSVG = (svgCode) => {
    if (onGenerateSVG) {
      onGenerateSVG(svgCode);
    }
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <div>{msg.text}</div>
            {msg.svgCode && (
              <pre className="svg-code">
                {msg.svgCode}
              </pre>
            )}
            {msg.hasButton && (
              <button
                className="generate-svg-button"
                onClick={() => handleGenerateSVG(msg.svgCode)}
              >
                Generate SVG
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;

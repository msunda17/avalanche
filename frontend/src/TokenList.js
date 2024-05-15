import React from 'react';

function TokenList() {
  const tokens = [
    { token: "example", weight: "0.9" },
    { token: "token", weight: "0.5" }
  ];

  return (
    <div>
        <h4>Weighted keywords:</h4>
        <ul>
        {tokens.map((item, index) => (
            <li key={index}>{item.token} - {item.weight}</li>
        ))}
        </ul>
        <button disabled={true} type="submit">Generate</button>
    </div>
  );
}

export default TokenList;

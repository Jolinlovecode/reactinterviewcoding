import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Hello Code</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> {counter} </p>
      <button onClick={() => {setCounter(counter + 1);}}>Increase Count</button>
    </div>
  );
}

export default App;

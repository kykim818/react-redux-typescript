import React from 'react';
import Button from './components/atoms/Button';
// import './App.css'

function App() {
  const clickEvent = () => {
    alert("Clicked !!");
  }
  return (
    <div className="App">
      <h1>Button</h1>
      <Button onClick={clickEvent} className="white">Button Components</Button>
      <Button onClick={clickEvent} className="black">Button Components</Button>
      <h1>Input</h1>
      <input />
    </div>
  );
}

export default App;

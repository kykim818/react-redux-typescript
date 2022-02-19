import React from "react";
import styled from "styled-components";
// eslint-disable-next-line
import { BlackButton, Button, WhiteButton } from "./components/atoms/Button";
import Switch from "./components/atoms/Switch";
// import './App.css'

function App() {
  const clickEvent = () => {
    alert("Clicked !!");
  };
  return (
    <div className="App">
      {/* <h1>Button</h1>
      <ButtonGroups>
        <WhiteButton onClick={clickEvent}></WhiteButton>
        <BlackButton onClick={clickEvent}>Black Button Components</BlackButton>
        <Button onClick={clickEvent}>Normal Button Components</Button>
      </ButtonGroups>
      <h1>Input</h1>
      <input /> */}
      <h1>Toggle</h1>
      <Switch state={false} />
    </div>
  );
}

export default App;

const ButtonGroups = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5px;
`;

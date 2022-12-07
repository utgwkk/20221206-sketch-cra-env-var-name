import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { atom, useRecoilValue } from "recoil";

const yourName = atom({ key: "yourName", default: "aaa" });

function App() {
  const name = useRecoilValue(yourName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        こんにちは{name}さん、{process.env.REACT_APP_YOUR_NAME} です
      </header>
    </div>
  );
}

export default App;

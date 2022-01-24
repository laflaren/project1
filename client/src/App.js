// import { response } from "express";
import React, { useState } from "react";
import List from "./List.js";
import Home from "./Home.js";
import "./App.css";

export default function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="col">
      <h1> Döte </h1>

      {isHome ? (
        <button className="headerButton" onClick={() => setIsHome(false)}>
          {" "}
          Sign in{" "}
        </button>
      ) : (
        <button className="headerButton" onClick={() => setIsHome(true)}>
          {" "}
          Home{" "}
        </button>
      )}
      <div> {isHome ? <Home /> : <List />}</div>
    </div>
  );
}

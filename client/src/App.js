// import { response } from "express";
import React, { useState } from "react";
import List from "./List.js";
import Home from "./Home.js";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [isHome, setIsHome] = useState(true);

  const handleChangeView = isHome => {
    setIsHome(isHome);
    console.log(isHome);
  };
  return (
    <div className="col">
      <h1> Döte </h1>
      {/* create the ternary using state */}
      {isHome ? (
        <button
          className="headerButton"
          onClick={() => handleChangeView(false)}
        >
          {" "}
          Sign in{" "}
        </button>
      ) : (
        <button className="headerButton" onClick={() => handleChangeView(true)}>
          {" "}
          Home{" "}
        </button>
      )}
      <div>{isHome ? <Home /> : <List page={page} />}</div>
      {/* filter sort 
      to do state / added, sort it by t
      completed - crossed out, 
      if completed is true - list at bottom. 
        or in js: 'todo.items.sort()' method  */}

      {/* revolving quotes - organizing / minimalism array - object, functions in JS for random 0 and array.length-1 */}

      {/* bootstrap */}
    </div>
  );
}

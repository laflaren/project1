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
  };
  return (
    <div class="col">
      <h1> Döte </h1>
      <div>
        <button
          class="col-sm-8 col-lg-6 bg-danger p-4"
          className="buttonA center"
          onClick={() => handleChangeView(true)}
        >
          Sign in
        </button>
        {/* create the ternary using state */}
        {isHome ? (
          <Home addProject={newProject => handleAddProject()} />
        ) : (
          <List page={page} />
        )}
      </div>
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

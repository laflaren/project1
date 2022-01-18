// import { response } from "express";
import React from "react";
import List from "./List.js";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1> Döte </h1>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tumblr.com%2Fpjm0hgk%2FhpRlz17tv%2Ffeather.png&f=1&nofb=1" />
      <h2> Overcome stuff </h2>
      <p>
        {" "}
        Innovative cleaning, organizing, and unburdening-- plus the tools you
        need to put you in motion. Sign up and get your motivation here.{" "}
      </p>
      <button> Sign in </button>
      <h3>Features</h3>
      <ul>
        <li> Local & in-person resources </li>

        <li> Try different methods and paces until one works for you </li>

        <li> Get personalized help </li>

        <li> Updated tips on your journey to downsizing</li>
      </ul>
    </div>
  );
}

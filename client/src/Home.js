import React, { useState } from "react";
import "./App.css";

export default function Home() {
  // const [page, setPage] = useState('home');
  return (
    <div>
      <div className="orange">
        <img
          className="center"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tumblr.com%2Fpjm0hgk%2FhpRlz17tv%2Ffeather.png&f=1&nofb=1"
        />
      </div>
      <div className="home2">
        <h2> Overcome stuff </h2>
        <p>
          Innovative cleaning, organizing, and unburdening-- plus the tools you
          need to put you in motion. Sign up and get your motivation here.
        </p>

        <button className="buttonA center"> Sign in </button>
        <br />
      </div>
      <div className="home3">
        <h3>Features</h3>
        <ul>
          <li> Local & in-person resources </li>

          <li> Try different methods and paces until one works for you </li>

          <li> Get personalized help </li>

          <li> Updated tips on your journey to downsizing</li>
        </ul>
      </div>
    </div>
  );
}

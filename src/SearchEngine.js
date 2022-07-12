import React from "react";
import "./App.css";
import developer from "./developer.jpg";

export default function SearchEngine() {
  return (
    <div className="Search-engine">
      <header className="search-engine">
        <img src={developer} className="App-logo w-50" alt="logo" />
      </header>
    </div>
  );
}

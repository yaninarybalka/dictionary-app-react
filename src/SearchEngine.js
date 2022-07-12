import React, { useState } from "react";
import "./SearchEngine.css";
import developer from "./developer.jpg";

export default function SearchEngine() {
  let [searchInput, setSearchInput] = useState(null);

  function handleSearch(event) {
    setSearchInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(searchInput);
  }

  return (
    <div className="Search-engine">
      <div className="text-wrapp">
        <h1 className="title"> Dictionary</h1>
        <h2 className="description"> Choose a word and look it up!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a word"
            onChange={handleSearch}
          />
          <input type="submit" value="GO" />
        </form>
        <h5 className="example">e.g. wine, sea, mermaid, forest</h5>
      </div>
    </div>
  );
}

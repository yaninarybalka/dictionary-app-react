import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function SearchEngine() {
  let [searchInput, setSearchInput] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSearch(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
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

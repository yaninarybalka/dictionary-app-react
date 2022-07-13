import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import Result from "./Result";

export default function SearchEngine() {
  let [searchInput, setSearchInput] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
  let [apiResponse, setApiResponse] = useState(null);

  function handleResponse(response) {
    setApiResponse(response.data[0]);
  }

  function handleSearch(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="container">
      <div className="Search-engine">
        <div className="text-wrapp">
          <h1 className="title mb-1"> Dictionary</h1>
          <h2 className="description mb-3"> Choose a word and look it up!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a word"
              onChange={handleSearch}
              class="search-input"
            />
            <input class="submit-btn" type="submit" value="GO" />
          </form>
          <h5 className="example-info">e.g. wine, sea, mermaid, forest</h5>
        </div>
      </div>
      <div>
        {" "}
        <Result data={apiResponse} />
      </div>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <SearchEngine />
    </div>
  </React.StrictMode>
);

reportWebVitals();

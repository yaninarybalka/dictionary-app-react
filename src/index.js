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
      <footer class="text-center">
        <h7 class=""> This website was coded by Yanina Rybalka </h7> <br />
        <a href="https://github.com/yaninarybalka" target="_blank" class="icon">
          <i class="fa-brands fa-github me-3"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yanina-rybalka-371b0b173/"
          target="_blank"
          class="icon"
        >
          <i class="fa-brands fa-linkedin me-3"></i>
        </a>
        <a href="mailto:rybalka.yanina@gmail.com" target="_blank" class="icon">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </footer>
    </div>
  </React.StrictMode>
);

reportWebVitals();

import React from "react";
import "./SearchEngine.css";

export default function Synonyms(props) {
  if (props.data.synonyms.length) {
    return (
      <div className="synonyms-wrapper">
        {" "}
        <em class="synonym-word">Synonyms:</em>{" "}
        <ul className="synonyms">
          {props.data.synonyms.map(function (synonym, index) {
            return <li key={index}> {synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

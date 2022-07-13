import React from "react";
import "./SearchEngine.css";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        if (index < 4 && definition.example) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition} <br />
                <strong>Example: </strong>
                <span className="example">{definition.example}</span>
              </p>
            </div>
          );
        }
        if (index < 4) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

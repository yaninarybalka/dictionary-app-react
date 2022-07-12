import React from "react";

export default function Meaning(props) {
  console.log(props.data);

  return (
    <div>
      <h4>{props.data.partOfSpeech}</h4>
      {props.data.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition} <br />
                <strong>Example: </strong>
                {definition.example}
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

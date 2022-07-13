import React from "react";

export default function Synonyms(props) {
  if (props.data.synonyms.length) {
    return (
      <div>
        {" "}
        <span> Synonyms:</span>
        {props.data.synonyms.map(function (synonym, index) {
          return (
            <ul>
              <li key={index}> {synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

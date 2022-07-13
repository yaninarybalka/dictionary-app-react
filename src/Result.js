import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="results">
        <h4>{props.data.word}</h4>
        <Synonyms data={props.data.meanings[0]} />
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning data={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

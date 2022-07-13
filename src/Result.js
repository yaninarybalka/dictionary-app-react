import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Result(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="results">
        <h4>{props.data.word}</h4>
        <Phonetics data={props.data.phonetics} />
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

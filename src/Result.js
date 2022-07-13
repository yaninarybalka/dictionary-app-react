import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import "./SearchEngine.css";

export default function Result(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="results">
        <div className="first-section">
          <h4 className="main-word">{props.data.word}</h4>
          <Phonetics data={props.data.phonetics} />
          <Synonyms data={props.data.meanings[0]} />
        </div>
        <div className="second-section">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <Meaning data={meaning} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

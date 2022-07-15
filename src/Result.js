import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

import "./SearchEngine.css";

export default function Result(props) {
  if (props.data && props.photos) {
    return (
      <div className="results">
        <div className="first-section">
          <h4 className="main-word">{props.data.word}</h4>
          <Phonetics data={props.data.phonetics} />
          <Photos data={props.photos} />
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

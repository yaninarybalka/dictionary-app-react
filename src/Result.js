import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="results">
        <h4>{props.data.word}</h4>
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

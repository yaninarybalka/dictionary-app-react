import React from "react";
import "./SearchEngine.css";

export default function Phonetics(props) {
  if (props.data[0].audio) {
    return (
      <span className="phonetics">
        {props.data[0].text}
        <audio controls src={props.data[0].audio}>
          🔊
        </audio>
      </span>
    );
  } else {
    return <span className="phonetics">{props.data[0].text}</span>;
  }
}

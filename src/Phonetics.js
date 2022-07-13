import React from "react";

export default function Phonetics(props) {
  console.log(props.data);
  if (props.data[0].audio) {
    return (
      <div>
        {props.data[0].text}
        <audio controls src={props.data[0].audio}>
          🔊
        </audio>
      </div>
    );
  } else {
    return <div>{props.data[0].text}</div>;
  }
}

import React from "react";

export default function Photos(props) {
  if (props.data.photos) {
    return (
      <div className="row">
        {props.data.photos.map(function (photo, index) {
          return (
            <div className="col-sm" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.tiny}
                  className="img-fluid example-img"
                  alt=""
                ></img>
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

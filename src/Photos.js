import React from "react";

export default function Photos(props) {
  console.log(props.data.photos);
  if (props.data.photos) {
    return (
      <div className="row">
        {props.data.photos.map(function (photo, index) {
          return (
            <div className="col-sm" key={index}>
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid example-img mb-2"
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

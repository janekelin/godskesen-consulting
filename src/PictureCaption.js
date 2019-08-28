import React from "react";

function PictureCaption(props) {
  return (
    <figcaption className="tilt-caption">
      <h2 className="tilt-title">{props.name}</h2>
      <p className="tilt-description">{props.subtitle}</p>
    </figcaption>
  );
}

export default PictureCaption;

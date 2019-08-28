import React from "react";

function Picture(props) {
  return (
    <img
      className="tilt--cover tilt-image"
      src={props.pic}
      alt={"Portrait of " + props.name}
    />
  );
}

export default Picture;

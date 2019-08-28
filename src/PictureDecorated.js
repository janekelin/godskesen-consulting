import DecorativeBorder from "./DecorativeBorder";
import DecorativeOverlay from "./DecorativeOverlay";
import Picture from "./Picture";
import PictureCaption from "./PictureCaption";
import React from "react";

function PictureDecorated(props) {
  return (
    <figure className="tilt--cover tilt-figure js-tilt">
      <Picture pic={props.pic} name={props.name} />
      <DecorativeOverlay />
      <PictureCaption name={props.name} subtitle={props.subtitle} />
      <DecorativeBorder
        viewbox={props.viewbox}
        desc={props.desc}
        svgBorder={props.svgBorder}
      />
    </figure>
  );
}

export default PictureDecorated;

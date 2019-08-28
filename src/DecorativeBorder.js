import React from "react";

function DecorativeBorder(props) {
  return (
    <svg
      className="tilt-deco tilt-deco--lines"
      viewBox={props.viewbox}
      title="white outline"
      desc={props.desc}
    >
      <desc>{props.desc}</desc>
      <path d={props.svgBorder} />
    </svg>
  );
}

export default DecorativeBorder;

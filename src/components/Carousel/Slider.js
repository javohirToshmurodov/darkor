import React from "react";
function Slider(props) {
  return (
    <img key={props.img} src={props.img} className="max-h-[540px] object-cover" />
  );
}

export default Slider;

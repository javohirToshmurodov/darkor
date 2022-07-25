import React from "react";
function Slider(props) {
  return (
    <div className="container">
      <img key={props.img} src={props.img} className="max-h-[540px] object-cover" />
    </div>
  );
}

export default Slider;

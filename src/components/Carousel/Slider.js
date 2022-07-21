import React from "react";
function Slider(props) {
  return (
    <div>
      <img alt="" src={props.img} className="max-h-[540px] object-cover" />
    </div>
  );
}

export default Slider;

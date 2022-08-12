import React, { useEffect } from "react";
function Slider(props) {
  useEffect(() => {
    console.log(props);
  }, [])
  const linkTo = () => {
    window.open(`${props.click}`)
  }
  return (
    <img onClick={linkTo} key={props.img} src={props.img} className="max-h-[540px] object-cover" />
  );
}

export default Slider;

import React, { useState } from "react";

import GetAll from "./getAll";
import Create from "./create";
import { Button } from "antd";

const CreateCarousel = () => {
  const [idx, setIdx] = useState(0);
  const menu = [
    {
      title: "get All",
      item: <GetAll />,
    },
    {
      title: "Create",
      item: <Create />,
    },
  ];
  return (
    <>
      {menu.map((item, index) => (
        <Button onClick={() => setIdx(index)}>{item.title}</Button>
      ))}
      {menu[idx].item}
    </>
  );
};

export default CreateCarousel;

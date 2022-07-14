import { React, useState } from "react";
import cardpic from "../../assets/images/cardpic.svg";
import { Carousel } from "react-responsive-carousel";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselSlider(props) {
  const [slider, setSlider] = useState([
    {
      img: cardpic,
    },
    {
      img: cardpic,
    },
    {
      img: cardpic,
    },
    {
      img: cardpic,
    },
  ]);
  return (
    <div className="container p-0 max-h-[540px] mb-5">
      <Carousel autoPlay showStatus={false} showArrows={false}>
        {slider.map((e, i) => (
          <>
            <Slider key={i} img={e.img} />
          </>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;

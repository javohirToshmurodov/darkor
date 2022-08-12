import { React, useEffect, useState } from "react";
import cardpic from "../../assets/images/cardpic.svg";
import { Carousel } from "react-responsive-carousel";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { instance } from "../../redux/actions";

function CarouselSlider(props) {
  const [slider, setSlider] = useState([
  ]);
  const getCarousel = () => {
    instance.get("/api/v1/carousel/list?size=10&page=0").then((res) => {
      console.log(res.data.body);
      setSlider([...res.data.body])
    })
  }
  useEffect(() => {
    getCarousel()
  }, [])
  return (
    <div className="container p-0 max-h-[540px] md:mb-5 mb-2 px-3 ">
      <Carousel autoPlay showStatus={false} showArrows={false}>
        {
          slider.map((e, i) => (
            <Slider key={i} img={e.gallery.url} click={e.link} />
          ))
        }
      </Carousel>
    </div>
  );
}

export default CarouselSlider;

import { React, useEffect, useState } from "react";
import cardpic from "../../assets/images/cardpic.svg";
import { Carousel } from "react-responsive-carousel";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { instance } from "../../redux/actions";
import { Spin } from "antd";

function CarouselSlider(props) {
  const [loading, setLoading] = useState(false)
  const [slider, setSlider] = useState([
  ]);
  const getCarousel = () => {
    setLoading(true)
    instance.get("/api/v1/carousel/list?size=10&page=0").then((res) => {
      console.log(res.data.body);
      setSlider([...res.data.body])
    })
    setLoading(false)
  }
  useEffect(() => {
    getCarousel()
  }, [])
  return (
    <Spin spinning={loading}>

      <div className="container p-0 max-h-[540px] md:mb-5 mb-2 px-3 ">
        <Carousel autoPlay showStatus={false} showArrows={false}>
          {
            slider.map((e, i) => (
              <Slider key={i} img={e.gallery.url} click={e.link} />
            ))
          }
        </Carousel>
      </div>
    </Spin>
  );
}

export default CarouselSlider;

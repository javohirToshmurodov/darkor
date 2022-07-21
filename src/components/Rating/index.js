import React from 'react'
import TitleH1 from '../TitleH1'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from "../../assets/images/cardpic.svg"
export default function Rating() {
   return (
      <div>
         <TitleH1 title="" />

         <Carousel>
            <div>
               <img src={img} />
               <p className="legend">Legend 1</p>
            </div>
            <div>
               <img src={img} />
               <p className="legend">Legend 2</p>
            </div>
            <div>
               <img src={img} />
               <p className="legend">Legend 3</p>
            </div>
         </Carousel>
      </div>
   )
}

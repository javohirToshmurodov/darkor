import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselSlider from "../../components/Carousel";
import ContactWithUs from "../../components/ContactWithUs";
import DefaultCard from "../../components/DefaultCardCourses";
import Footer from "../../components/Footer";
import { instance } from "../../redux/actions";

const Courses = () => {
<<<<<<< HEAD
   const { id } = useParams();
   const [courses, setCourses] = useState([]);
   const [loading, setLoading] = useState(false);
   const getCourses = () => {
      setLoading(true);
      instance
         .get("api/v1/course/list/?size=10&page=1")
         .then((res) => {
            console.log(res.data.body);
            setCourses([...res.data.body]);
            setLoading(false);
         })
=======
   const { id } = useParams()
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(false)
   const getCourses = () => {
      setLoading(true)
      instance.get("api/v1/course/list/?size=10&page=0").then((res) => {
         console.log(res.data.body);
         setCourses([...res.data.body])
         setLoading(false)
      }).catch((err) => {
         console.log(err);
      })
>>>>>>> 0cff9ebee04d35d196d4dfb85347b5225b2c2c1f
         .catch((err) => {
            console.log(err);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   useEffect(() => {
      getCourses();
      console.log("courses", courses);
   }, []);
   return (
      <Spin spinning={loading}>
         <div className="">
            <div className="container ">
               <CarouselSlider />
<<<<<<< HEAD
               <div className="mt-5 row align-items-start justify-content-center">
=======
               <div className="row mt-5 align-items-start justify-content-center">
>>>>>>> 0cff9ebee04d35d196d4dfb85347b5225b2c2c1f
                  {courses.map((e, i) => (
                     <DefaultCard
                        code={e.id}
                        key={e.id}
                        img={e.galleries[0].url}
                        subtitle={e.description}
                        title={e.name}
                     />
                  ))}
               </div>
            </div>
         </div>
<<<<<<< HEAD
         <div className="container px-5 my-5">
=======
         <div className="container my-5 px-5">
>>>>>>> 0cff9ebee04d35d196d4dfb85347b5225b2c2c1f
            <ContactWithUs />
         </div>
         <div className="pt-5">
            <Footer />
         </div>
      </Spin>
   );
};

export default Courses;

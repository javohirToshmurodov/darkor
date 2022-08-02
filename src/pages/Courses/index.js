import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselSlider from "../../components/Carousel";
import ContactWithUs from "../../components/ContactWithUs";
import DefaultCard from "../../components/DefaultCardCourses";
import Footer from "../../components/Footer";
import { instance } from "../../redux/actions";
import { useTranslation } from "react-i18next";
const Courses = () => {
   const { t } = useTranslation()
   const { id } = useParams()
   const [page, setPage] = useState(10)
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(false)
   const getCourses = () => {
      setLoading(true)
      instance.get(`api/v1/course/list/?size=${page}&page=0`).then((res) => {
         setCourses([...res.data.body])
         console.log(res.data.body);
         setLoading(false)
      }).catch((err) => {
         console.log(err);
      })
         .catch((err) => {
            console.log(err);
         })

   };
   const moreCourses = () => {
      setPage(prev => prev + 10);
      console.log(page);
   };
   useEffect(() => {
      getCourses()
   }, [page])

   return (
      <Spin spinning={loading}>
         <div className="">
            <div className="container ">
               <CarouselSlider />
               <div className="row mt-5 align-items-start justify-content-center">
                  {courses.map((e, i) => (
                     <DefaultCard
                        code={e.id}
                        key={e.id}
                        img={e.galleries[0].url}
                        subtitle={e.description}
                        title={e.name}
                     />
                  ))}
                  <div className="text-center">
                     <div onClick={moreCourses} className="btn btn-primary">{t("more")}</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container my-5 p-5">
            <ContactWithUs />
         </div>
         <div className="pt-5">
            <Footer />
         </div>
      </Spin>
   );
};

export default Courses;

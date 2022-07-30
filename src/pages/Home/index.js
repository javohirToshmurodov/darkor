import React, { useEffect, useState } from "react";
import DefaultButton from "../../components/DefaultButton";
import cardpic from "../../assets/images/cardpic.svg";
import DefaultCard from "../../components/DefaultCardCourses";
import TitleH1 from "../../components/TitleH1";
import undraw from "../../assets/images/undraw.svg";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel";
import CourseKadr from "../../components/CourseKadr";
import Partnership from "../../components/Partnership";
import ContactButton from "../../components/ContactButton";
import ContactWithUs from "../../components/ContactWithUs";
import Footer from "../../components/Footer";
import DefaultAllCourseButton from "../../components/DefaultAllCourseButton";
import Statistics from "../../components/Statistics";
import HomeServise from "../../components/HomeServise";
import { instance } from "../../redux/actions";
import FAQ from "../../components/FAQ";
import { Spin } from "antd";
export default function Home() {
   const { t, i18n } = useTranslation();
   const [courses, setCourses] = useState([]);
   const [loading, setLoading] = useState(false);
   const getCourses = () => {
      setLoading(true);
      instance
         .get("api/v1/course/list/?size=10&page=0")
         .then((res) => {
            console.log(res.data.body);
            setCourses([...res.data.body]);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
         })
         .catch((err) => {
            console.log(err);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   useEffect(() => {
      getCourses();
   }, []);
   return (
      <Spin spinning={loading}>
         <section>
            <Carousel />
         </section>
         <section>
            <CourseKadr />
         </section>
         <section>
            <Statistics />
         </section>
         <section className="container px-5">
            <HomeServise />
         </section>
         <section className="mt-5">
            <div
               className="container px-5 py-5 bgCourse"
               style={{
                  background: "#F3F3FB",
                  borderRadius: "40px",
               }}
            >
               <div className="px-3 row align-items-center">
                  <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                     <TitleH1 title={t("courseTitleH1")} />
                     <div className="mt-3">
                        <DefaultAllCourseButton title={t("allcourse")} />
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                     <img className="img-fluid" src={undraw} alt="" />
                  </div>
               </div>
               <div className="px-3 mt-5 row">
                  {courses.map((e, i) => (
                     <>
                        <DefaultCard
                           key={e.id}
                           title={e.name}
                           subtitle={e.decription}
                           img={e.galleries[0].url}
                        />
                     </>
                  ))}
               </div>
            </div>
         </section>
         <section id="partnership">
            <Partnership />
         </section>
         <section id="contactus" className="p-5">
            <ContactWithUs />
         </section>
         <section className="p-5">
            <div className="container px-4">
               <div className="row justify-content-center">
                  <div className="col-9 ">
                     <TitleH1 title={t("faq")} />
                     <FAQ />
                  </div>
               </div>
            </div>
         </section>
         <section className="mt-5">
            <Footer />
         </section>
      </Spin>
   );
}

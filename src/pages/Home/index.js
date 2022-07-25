import React, { useState } from "react";
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
import Statistics from "../../components/Statistics";
export default function Home() {
   const { t, i18n } = useTranslation();
   const [courses, setCourses] = useState([
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель",
      },
   ]);
   return (
      <div>
         <section>
            <Carousel />
         </section>
         <section>
            <CourseKadr />
         </section>
         <section>
            <Statistics />
         </section>
         <section className="">
            <div className="container px-5 py-5 bgCourse">
               <div className="px-3 row align-items-center">
                  <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                     <TitleH1 title={t("courseTitleH1")} />
                     <div className="mt-3">
                        <DefaultButton title={t("allcourse")} />
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
                           key={i}
                           title={e.title}
                           subtitle={e.subtitle}
                           img={e.img}
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
         <section className="mt-5">
            <Footer />
         </section>
      </div>
   );
}

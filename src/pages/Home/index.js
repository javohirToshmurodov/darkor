import React, { useState } from 'react'
import DefaultButton from '../../components/DefaultButton'
import cardpic from "../../assets/images/cardpic.svg"
import DefaultCard from '../../components/DefaultCardCourses'
import TitleH1 from '../../components/TitleH1'
import undraw from "../../assets/images/undraw.svg"
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'
import Rating from '../../components/Rating'
export default function Home() {
   const { t, i18n } = useTranslation()
   const [courses, setCourses] = useState([
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
      {
         img: cardpic,
         title: "Имя курса: Бухгалтер",
         subtitle: "Продолжительность курса: 10 недель"
      },
   ])
   return (
      <div>
         <section id='kurslar_qismi'>
            <div className="container bgCourse px-5 py-5">
               <div className="row px-3 align-items-center">
                  <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                     <TitleH1 title={t("courseTitleH1")} />
                     <div className='mt-3'>
                        <DefaultButton title={t("allcourse")} />
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                     <img className='img-fluid' src={undraw} alt="" />
                  </div>
               </div>
               <div className="row mt-5 px-3">
                  {
                     courses.map((e, i) => (<>
                        <DefaultCard key={i} title={e.title} subtitle={e.subtitle} img={e.img} />
                     </>
                     ))}
               </div>
            </div>
         </section>

         <section>
            <Rating />
         </section>
      </div>
   )
}

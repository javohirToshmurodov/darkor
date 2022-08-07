import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CarouselSlider from '../../components/Carousel'
import { StickCardCourseDetailWrapper } from '../../styles'
import Up from "../../assets/icons/upDown.svg"
import SearchIcon from "../../assets/images/magnifyingglass.svg"
import { instance } from '../../redux/actions'
const Users = () => {
   const { t } = useTranslation()
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(false)

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

   };
   useEffect(() => {
      getCourses()
      // const usersP = document.querySelectorAll(".menuUsers")
      // usersP.addEventListener("click", handleClick)
   }, [])

   const handleClick = (e) => {
      console.log(e);
   }
   return (
      <Spin spinning={loading}>
         <div className='container'>
            <section>
               <CarouselSlider />
            </section>

            <section>
               <div className="container">
                  <div className="row">
                     <div className='mt-4 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'>
                        <StickCardCourseDetailWrapper className='mt-5 position-sticky'>
                           <div className='p-3'>
                              <h5>{t("navbar-6")}</h5>
                              <hr />
                              <div>
                                 <input className='w-100  ' type="text" style={{ "background": `url(${SearchIcon})`, "backgroundRepeat": "no-repeat", "outline": "none", "border": "1px solid #E5E5EA", "padding": "8px 0 8px 32px", "borderRadius": "8px", "backgroundPosition": "10px", "caretColor": "#e5e5e5", "color": "#8E8E93" }} placeholder={t("signupnow")} />
                              </div>

                              <p className='bg-light d-flex justify-between align-center px-3 my-4 p-2 rounded'>
                                 Обзор-Экспертов
                                 <img src={Up} alt="" />
                              </p>
                              {
                                 courses.map((e, i) => <p className='cursor-pointer menuUsers' key={e.id}>
                                    Эксперт по {e.name}
                                 </p>)
                              }
                           </div>
                        </StickCardCourseDetailWrapper>
                     </div>
                     <div className='mt-4 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12'>
                        dls
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Spin>
   )
}

export default Users
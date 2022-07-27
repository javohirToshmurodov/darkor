import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import { instance } from '../../../redux/actions'
import { useTranslation } from 'react-i18next'
import { CoursePriceCardWrapper } from '../../../styles/index'
import { ThunderboltOutlined } from '@ant-design/icons'
import TitleH1 from '../../../components/TitleH1'
import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons"
import Footer from '../../../components/Footer'
import ContactWithUs from '../../../components/ContactWithUs'
import Faq from '../../../components/FAQ'

const CourseDetails = () => {
   const { id } = useParams()
   const { t, i18n } = useTranslation()
   const [courseDetail, setCourseDetails] = useState({})
   const [data, setData] = useState(false)
   const [loading, setLoading] = useState(true)
   const [skills, setSkills] = useState([])

   const getEmployeeDetails = () => {
      courseDetail?.course?.code && instance.get(`api/v1/employee/get_by_course/${courseDetail?.course?.code}?size=10&page=0&lang=uz`).then((res) => {
         console.log(res.data);
      }).catch((err) => {
         console.log(err);
      })
   }
   const getCourseDetails = async () => {
      try {
         const res = await instance.get(`/api/v1/courseDetails/get/?id=${id}`)
         console.log(res.data.body);
         setCourseDetails(res.data.body)
         setData(true)
         setLoading(false)

      } catch (err) {
         console.log(err);
         setLoading(false)
      }
   }
   const getSkills = () => {
      instance.get("/api/v1/skill/list?size=10&page=0").then((res) => {
         setSkills([...res.data.body])
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getCourseDetails()
      getSkills()
      getEmployeeDetails()
   }, [id])
   useEffect(() => {
   }, [courseDetail])
   return (

      <Spin spinning={loading} >
         <div className="container">
            <CarouselSlider />

            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

               </div>
               <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <div className="row mt-4">
                     {
                        courseDetail?.course?.name && <p className='m-0 d-flex align-items-center mt-5'>
                           {t("overviewCourse")} {courseDetail?.course?.name}
                        </p>
                     }
                     {
                        courseDetail?.titleDescription && <TitleH1 title={courseDetail?.titleDescription} />
                     }
                     {
                        courseDetail?.bodyDescription && <p>
                           {
                              courseDetail?.bodyDescription
                           }
                        </p>
                     }
                     {/* {
                     <img className='mt-5' src={courseDetail?.file[0]?.url} alt="" />
                  } */}
                     {
                        courseDetail?.file?.map((e, i) => {
                           e.extension === "jpg" || e.extension === "jpeg" || e.extension === "pngs" ? (
                              <img src={e.url} alt="rasmyoq" />
                           ) : (
                              <video src={e.url} autoPlay controls></video>
                           )
                        }
                        )
                     }
                  </div>
                  <hr />
                  <div className="row py-5 mt-5">
                     <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                        <p>{t("skillProgram")}</p>
                        <TitleH1 title={t("whatYouLearn")} />

                        <div className="mt-5">
                           {
                              skills.map((e, i) => <div className='mb-3 '>
                                 <div className="d-flex w-100 ">
                                    <div>
                                       <CheckOutlined className='me-3' style={{ "color": "#34C759", "fontSize": "24px" }} />
                                    </div>
                                    <div className='flex-1'>
                                       <h4>{e.name}</h4>
                                       <p style={{ "color": "#3A3A3C" }} className='m-0'>{e.description}</p>
                                       <hr />
                                    </div>
                                 </div>
                              </div>)
                           }
                        </div>

                        <div>
                           <p className='mt-4'>{t("skillProgram")}</p>
                           <TitleH1 title={t("practiceLearn")} />
                           <p>
                              {t("practiceLearnDesc")}
                           </p>
                        </div>
                        <hr />
                     </div>
                  </div>
                  <div className="row py-5 mt-5">
                     <p>{t("specialistTeam")}</p>
                     <TitleH1 title={t("specialistTeamTitle")} />
                     <p>
                        {t("specialistTeamDesc")}
                     </p>
                  </div>
                  <div className="row mt-5 py-5">
                     <p>{t("price")}</p>
                     <TitleH1 title={t("priceTitle")} />
                     <p style={{ "color": "#3A3A3C" }}>{t("priceDescription")}</p>
                     <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 ">

                        <CoursePriceCardWrapper className='flex-column d-flex align-items-start p-4 mt-5'>
                           <div className='circlePrice mt-4 mx-auto text-center'>
                              <ThunderboltOutlined />
                           </div>
                           <h1 className='fw-bold mt-3 text-center mx-auto' style={{ "fontSize": "48px", "lineHeight": "60px", "letterSpacing": "-0.0em" }}>{courseDetail?.price?.price}/uzs</h1>
                           <p style={{ "color": "#8E8E93" }} className='mx-auto'>
                              {t("pricePerMonth")}
                           </p>
                           <ul className='my-3 text-start'>

                              {
                                 courseDetail?.price?.offers.map((e, i) => <li className='mb-2 ' key={i}>
                                    <CheckCircleFilled className='me-2' style={{ "fontSize": "22px", "color": "#111" }} />
                                    {e}
                                 </li>)
                              }
                           </ul>

                           <button className="btn btn-primary btn-block w-100">Запишитесь сейчас</button>
                        </CoursePriceCardWrapper>

                     </div>
                  </div>
                  <div className="mt-5 py-5">
                     <p>
                        {t("cetrificate")}
                     </p>
                     <TitleH1 title={t("certificateDarkor")} />
                     <p>
                        {t("certificateDesc")}
                     </p>
                     <div className="row">
                        {
                           courseDetail?.file?.map((e, i) => <div className='' key={i}>
                              {
                                 e.fileType === "CERTIFICATE" ? <img className='img-fluid' src={e.url} /> : ""
                              }
                           </div>)
                        }


                     </div>
                  </div>
               </div>
            </div>

            <hr />
            <div className="mt-5 py-5">
               <Faq />
            </div>
            <div className="mt-5 py-5">

               <ContactWithUs />
            </div>
         </div>
         <div className="mt-5">
            <Footer />
         </div>
      </Spin>

   )
}

export default CourseDetails
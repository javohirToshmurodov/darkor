import { Skeleton, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import { instance } from '../../../redux/actions'
import { useTranslation } from 'react-i18next'
import { CoursePriceCardWrapper, EmployeeImgWrapper, StickCardCourseDetailWrapper } from '../../../styles/index'
import { ThunderboltOutlined } from '@ant-design/icons'
import TitleH1 from '../../../components/TitleH1'
import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons"
import Footer from '../../../components/Footer'
import ContactWithUs from '../../../components/ContactWithUs'
import { Collapse } from 'antd';
import Partnership from '../../../components/Partnership'
const CourseDetails = () => {
   const setActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
   const { Panel } = Collapse;
   const { id } = useParams()
   const { t, i18n } = useTranslation()
   const [courseDetail, setCourseDetails] = useState({})
   const [data, setData] = useState(false)
   const [loading, setLoading] = useState(true)
   const [skills, setSkills] = useState([])
   const [employees, setEmployees] = useState([])
   const [active, setActive] = useState(false)
   const [faq, setFaq] = useState([])
   const navigate = useNavigate()
   const getCourseDetails = async () => {
      try {
         setActive(true)
         const res = await instance.get(`/api/v1/courseDetails/get/?id=${id}`)
         setCourseDetails(res.data.body)
         setData(true)
         setLoading(false)
         setActive(false)

      } catch (err) {
         console.log(err);
         setLoading(false)
      }
   }
   const getSkills = () => {
      instance.get(`/api/v1/skill/get_by_course/${id}`).then((res) => {
         setSkills([...res.data.body])
      }).catch((err) => {
         console.log(err);
      })
   }
   const getFaq = () => {
      setLoading(true)
      instance.get(`/api/v1/faq/list_by_course_code/${courseDetail?.course?.code}?size=10&page=0&lang=uz`).then((res) => {
         setFaq([...res.data.body])
         setLoading(false)
      }).catch((err) => console.log(err))
   }
   useEffect(() => {
      getCourseDetails()
      getSkills()
   }, [id])

   const getEmployeeDetails = () => {
      courseDetail?.course?.code && instance.get(`/api/v1/employee_detail/get_by_course/${courseDetail?.course?.code}`).then((res) => {
         setEmployees([...res.data.body])
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getEmployeeDetails()
      getFaq()
   }, [courseDetail?.course?.code])

   return (

      <Spin spinning={loading}>
         <div className="container">
            <CarouselSlider />

            <div className="row">
               <div className="mt-4 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <StickCardCourseDetailWrapper className='mt-5 position-sticky '>
                     <div className='m-3'>
                        <h5>{t("coursename")}: {courseDetail?.course?.name}</h5>
                        <hr />
                     </div>

                     <div className=''>
                        <a
                           href='#aboutcourse'>
                           {t("allaboutCourse")}
                        </a>
                        <a href='#teachingProgram'>{t("teachingProgram")}</a>
                        <a href='#teachers'>{t("ourTeachers")}</a>
                        <a href='#graduates'>{t("graduates")}</a>
                        <a href='#price'>{t("priceOfCourse")}</a>
                        <a href='#faq'>{t("questions")}</a>
                     </div>
                     <div className='m-3'>
                        <button onClick={() => navigate("/contact")} className='btn btn-primary btn-block w-100'>{t("signUp")}</button>
                     </div>

                  </StickCardCourseDetailWrapper>
               </div>
               <div className="mt-4 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="row" id='aboutcourse'>
                     {
                        courseDetail?.course?.name && <p className='m-0 mt-5 d-flex align-items-center'>
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
                        courseDetail?.file?.map((e, i) => <div>
                           {e.fileType == "MEDIA" && <img src={e.url} alt="rasmyoq" className='mb-2 img-fluid coursedetailimg' />}
                        </div>
                        )
                     }
                     {
                        <iframe className='mt-3' width="320" height="497" src={`https://www.youtube.com/embed/${courseDetail?.youtubeVideo}`} >
                        </iframe>
                     }
                  </div>
                  <hr />
                  <div className="py-5 mt-5 row" id='teachingProgram'>
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
                           <TitleH1 title={courseDetail?.secondTitleDescription} />
                           <p>
                              {courseDetail?.secondBodyDescription}
                           </p>
                        </div>
                        <hr />
                     </div>
                  </div>
                  <div className="py-5 mt-5" id="teachers">
                     <p>{t("specialistTeam")}</p>
                     <TitleH1 title={t("specialistTeamTitle")} />
                     <p className='pe-5 w-75 mb-5'>
                        {t("expertDescription")}
                     </p>
                     {employees?.map((e, i) => <div className='row  my-4'>
                        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                           <div>
                              <EmployeeImgWrapper src={e.galleries[0].url} alt="" />
                           </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                           <div>
                              <p className='mt-4'>{t("teacher")}</p>
                              <h2 className='fw-bold'>{e.employee.fullName}</h2>
                              <p className='fw-bold'>
                                 {e.bodyDescription}
                              </p>
                           </div>
                        </div>
                     </div>)}

                     <div className="row">

                     </div>
                  </div>
                  <div className="py-5 mt-5 row" id="graduates">
                     <p>
                        {t("graduated")}
                     </p>
                     <TitleH1 title={t("meetourAlumni")} />

                  </div>
                  <div className="py-5 mt-5 row" id='price'>
                     <p>{t("price")}</p>
                     <div className='pe-5'>
                        <TitleH1 title={t("priceTitle")} />
                     </div>
                     <p className='w-75' style={{ "color": "#3A3A3C" }}>{t("priceDescription")}</p>
                     <div className="col-xl-6 col-lg-6 col-md-6 offset-xl-3 offset-lg-3 offset-0 col-sm-12 col-12 ">

                        <CoursePriceCardWrapper className=' p-4 mt-5 flex-column d-flex align-items-start'>
                           <div className='mx-auto mt-4 text-center circlePrice'>
                              <ThunderboltOutlined />
                           </div>
                           <h1 className='mx-auto mt-3 text-center fw-bold' style={{ "fontSize": "48px", "lineHeight": "60px", "letterSpacing": "-0.0em" }}>{courseDetail?.price?.price}/uzs</h1>
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

                           <button onClick={() => navigate(`${courseDetail?.course?.name}`)} className="btn btn-primary btn-block w-100">{t("signUp")}</button>
                        </CoursePriceCardWrapper>

                     </div>
                  </div>
                  <div className="py-5 mt-5">
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
                                 e.fileType && e.fileType === "CERTIFICATE" ? <img className='img-fluid' src={e.url} /> : ""
                              }
                           </div>)
                        }


                     </div>
                  </div>
                  <div className="py-5 mt-5" id='faq'>
                     <h1>
                        {t("faq")}
                     </h1>
                     <Collapse className='mt-4' defaultActiveKey={['1']} >
                        {
                           faq?.map((e, i) => <Panel header={e.question}>
                              <p>{e.answer}</p>
                           </Panel>)
                        }
                     </Collapse>
                  </div>

               </div>
            </div>

            <hr />


         </div>
         <div className="py-5 mt-5">
            <Partnership />
         </div>
         <div className="py-5 mt-5">
            <ContactWithUs />
         </div>
         <div className="mt-5">
            <Footer />
         </div>
      </Spin>

   )
}

export default CourseDetails
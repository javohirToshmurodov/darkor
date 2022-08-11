import { CheckOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import TitleH1 from '../../../components/TitleH1'
import { instance } from '../../../redux/actions'
import { EmployeeImgWrapper } from '../../../styles'

const UserDetail = () => {
   const { id } = useParams()
   const [userDetail, setUserDetail] = useState({})
   const [courseI, setCourseI] = useState("")
   const { t } = useTranslation()
   const [skills, setSkills] = useState([])
   let arr = []
   const getDetail = () => {
      instance.get(`/api/v1/user-employee/get-detail/${id}`).then((res) => {
         console.log(res.data);
         setUserDetail({ ...res.data.body })
      })
   }
   const getSkills = async () => {
      const courses = userDetail?.userEmployee?.courses
      for (let i = 0; i < courses?.length; i++) {

         let courseId = courses[i]?.id
         const res = await instance.get(`/api/v1/skill/get_by_course/${courseId}`)
         const response = res?.data.body
         for (let k = 0; k < response?.length; k++) {
            arr.push(response[k])
         }
      }

      return setSkills([...arr])
      console.log('arr', arr);
   }

   useEffect(() => {
      getDetail()
      getSkills()
      console.log("skills", skills);
      // getS()
      // console.log(data);
   }, [id])


   return (
      <div className='container'>
         <section>
            <CarouselSlider />
         </section>


         <div className="row justify-content-center">
            <div className="col-10">
               <div className='ps-2 py-4'>
                  <p>
                     Описание Эксперт
                  </p>
                  <TitleH1 title={userDetail?.title} />
                  <p>
                     {userDetail?.description}
                  </p>
               </div>
               <div className="row align-items-center py-5">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <EmployeeImgWrapper src={userDetail?.userEmployee?.gallery?.url} alt="no image" />
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                     <p className='mt-4 d-flex gap-2'>
                        {t("navbar-6")} {
                           userDetail?.userEmployee?.courses?.map((e, i) => <span className='gap-2 d-flex' key={i}>
                              {e.name}
                           </span>
                           )
                        }
                     </p>
                     <h2>{userDetail?.userEmployee?.fullName}</h2>
                     <p className='fw-bold'>
                        {userDetail?.userDescription}
                     </p>
                  </div>
               </div>
               <hr />
               <div>

                  <div>
                     {
                        userDetail?.gallery?.map((e, i) => <div>
                           {e.fileType == "MEDIA" && <img src={e.url} alt="rasmyoq" className='mb-2 img-fluid coursedetailimg' />}
                        </div>
                        )
                     }
                     {
                        userDetail?.youTubeVideo && <iframe width={"100%"} height={"490px"} className='mt-3' src={`https://www.youtube.com/embed/${userDetail?.youTubeVideo}`} >
                        </iframe>
                     }
                  </div>

                  <p>{t("skillProgram")}</p>
                  <div className="row">
                     {
                        skills?.map((e, i) => <div className='mb-3 '>
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
               </div>
               <h1>Detail</h1>
            </div>
         </div>
      </div>
   )
}

export default UserDetail
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../../components/Carousel'
import { instance } from '../../../redux/actions'
import { useTranslation } from 'react-i18next'
import { CoursePriceCardWrapper } from '../../../styles/index'
import { ThunderboltOutlined } from '@ant-design/icons'
import TitleH1 from '../../../components/TitleH1'
const CourseDetails = () => {
   const { id } = useParams()
   const { t, i18n } = useTranslation()
   const [courseDetail, setCourseDetails] = useState({})
   const [data, setData] = useState(false)
   const [loading, setLoading] = useState(true)
   const getCourseDetails = async () => {
      try {
         const res = await instance.get(`/api/v1/courseDetails/get/?id=${id}`)
         console.log(res.data.body);
         setCourseDetails({ ...res.data.body })
         setData(true)
         setLoading(false)

      } catch (err) {
         console.log(err);
         setLoading(false)
      }
   }

   useEffect(() => {
      getCourseDetails()
      console.log(id);
      console.log("coursedetail", courseDetail);
   }, [])
   useEffect(() => {
      console.log("coursedetail here", courseDetail);
   }, [courseDetail])
   return (

      <Spin spinning={loading} >
         <div className="container">
            <CarouselSlider />

            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

               </div>
               <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  {
                     courseDetail?.course?.name && <p className='m-0 d-flex align-items-center'>
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
                  {
                     courseDetail.file[0]?.url && <img className='mt-5' src={courseDetail.file[0]?.url} alt="" />
                  }

               </div>
            </div>
            <div className="row mt-4">

               <CoursePriceCardWrapper className='flex-column d-flex justify-content-center align-items-center'>
                  <div className='circlePrice mt-4'>
                     <ThunderboltOutlined />
                  </div>
                  {
                     courseDetail?.price?.price && <h1 className='fw-bold'>{courseDetail?.price?.price} UZS</h1>
                  }
               </CoursePriceCardWrapper>
            </div>
         </div>
      </Spin>

   )
}

export default CourseDetails
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarouselSlider from '../../components/Carousel'
import ContactWithUs from '../../components/ContactWithUs'
import DefaultCard from '../../components/DefaultCardCourses'
import Footer from '../../components/Footer'
import { instance } from '../../redux/actions'

const Courses = () => {
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
   }
   useEffect(() => {
      getCourses()
      console.log("courses", courses);
   }, [])
   return (
      <Spin spinning={loading}>

         <div className=''>
            <div className="container ">
               <CarouselSlider />
               <div className="row mt-5">
                  {
                     courses.map((e, i) => <DefaultCard code={e.id} key={e.id} img={e.galleries[0].url} subtitle={e.description} title={e.name} />)
                  }

               </div>
            </div>
         </div>
         <div className='container my-5 px-5'>
            <ContactWithUs />
         </div>
         <div className='pt-5'>
            <Footer />
         </div>
      </Spin>
   )
}

export default Courses
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import ContactWithUs from '../../components/ContactWithUs'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { instance } from '../../redux/actions'
import DefaultExpertCard from '../../components/DefaultCardExperts'
import { useTranslation } from 'react-i18next'
import DefaultButton from '../../components/DefaultButton'

const Experts = () => {
   const { t, i18n } = useTranslation()
   const { } = useParams()
   const [experts, setExperts] = useState([])
   const [loading, setLoading] = useState(false)
   const getExperts = () => {
      setLoading(true)
      instance.get("http://172.105.136.151:8080/api/v1/employee/list/expert?size=10&page=1&lang=uz").then((res) => {
         console.log("1", res.data.body);
         setExperts([...res.data.body])
         setLoading(false)
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getExperts()
      console.log("experts", experts);
   }, [])
   return (
      <Spin spinning={loading}>

         <div className=''>
            <div className="container">
               <div className='bg-expertbg md:h-[540px] md:p-0 p-10 flex flex-col justify-center items-center text-center'>
                  <p className='text-base font-semibold text-systemblue leading-[22px]'>{t("expert")}</p>
                  <h1 className='font-bold text-[44px] leading-[56px] tracking-tight'>{t("attention")}</h1>
                  <p className='md:w-[768px] font-normal text-xl leading-[27px] '>{t("expertSection1Description")}</p>
                  <DefaultButton className="text-base font-semibold leading-7 " title={t("expertSection1BtnText")} />
               </div>
               <div className="mt-5 row align-items-start">
                  {
                     experts.map((e, i) => <DefaultExpertCard code={e.code} key={e.id} subtitle={e.courses[0].name} img={e.gallery.url} title={e.fullName} />)
                  }


               </div>
            </div>
         </div>
         <div className='container px-5 my-5'>
            <ContactWithUs />
         </div>
         <div className='pt-5'>
            <Footer />
         </div>
      </Spin>
   )
}

export default Experts
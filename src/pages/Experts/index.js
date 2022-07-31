import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import ContactWithUs from '../../components/ContactWithUs'
import Footer from '../../components/Footer'
import { instance } from '../../redux/actions'
import DefaultExpertCard from '../../components/DefaultCardExperts'
import { useTranslation } from 'react-i18next'
import iconka from "../../assets/icons/searchIcon.svg";
import DefaultButton from '../../components/DefaultButton'
import { StickCardCourseDetailWrapper } from '../../styles'
const Experts = () => {
   const { t, i18n } = useTranslation()
   const [experts, setExperts] = useState([])
   const [search, setSearch] = useState("");
   const [loading, setLoading] = useState(false)
   const getExperts = () => {
      setLoading(true)
      instance.get("http://172.105.136.151:8080/api/v1/employee/list?type=EXPERT&size=10&page=1").then((res) => {
         setExperts([...res.data.body])
         setLoading(false)
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getExperts()
   }, [])
   return (
      <Spin spinning={loading}>

         <div className=''>
            <div className="container-fluid">
               <div className='bg-expertbg md:h-[540px] md:p-0 p-10 flex flex-col justify-center items-center text-center'>
                  <p className='text-base font-semibold text-systemblue leading-[22px]'>{t("expert")}</p>
                  <h1 className='font-bold text-[44px] leading-[56px] tracking-tight'>{t("attention")}</h1>
                  <p className='md:w-[768px] font-normal text-xl leading-[27px] '>{t("expertSection1Description")}</p>
                  <DefaultButton className="text-base font-semibold leading-7 " title={t("expertSection1BtnText")} />
               </div>
            </div>
            <div className='container'>
               <div className='row'>
                  <div className="mt-4 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                     <StickCardCourseDetailWrapper
                        className="mt-5 position-sticky "
                        style={{ padding: "20px" }}
                     >
                        <h5 className="mt-3 mb-3">Кадры</h5>

                        <div class="input-group">
                           <img
                              style={{
                                 padding: "8px",
                                 border: "1px solid lightgrey",
                                 borderRight: "none",
                              }}
                              src={iconka}
                              alt=""
                           />
                           <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with radio button"
                              placeholder="Запишитесь сейчас"
                              style={{ borderLeft: "none" }}
                              onChange={(e) => setSearch(e.target.value)}
                           />
                        </div>
                        <ul>
                           {experts.map((e, i) => (
                              <li className="my-3">{e.courses[0].name}</li>
                           ))}
                        </ul>
                     </StickCardCourseDetailWrapper>
                  </div>
                  <div className='mt-4 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12'>
                     <div className="items-center justify-between mt-5 row">
                        {
                           experts.map((e, i) => (
                              e.courses[0].description.includes(search) ? (
                                 < DefaultExpertCard code={e.code} key={e.id} subtitle={e.courses[0].name} img={e.gallery.url} title={e.fullName} />
                              ) : ("")
                           ))
                        }
                     </div>
                  </div>
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
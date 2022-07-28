import React from 'react'
import { FooterWrapper } from '../../styles'
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsFacebook } from "react-icons/bs"
import { InstagramOutlined, } from '@ant-design/icons'
const Footer = () => {
   const { t, i18n } = useTranslation()
   return (
      <footer className='footer text-white '>
         <FooterWrapper >

            <div className="container  p-5 mb-5">
               <div className="row p-5">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                     <h1 className='text-white'>{t("footerH1")}</h1>
                     <div className='gap-3 my-5 d-flex'>
                        <BsFacebook />
                        <InstagramOutlined />
                        <FaTelegramPlane />
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                     <div>
                        <p className='label'>
                           {t("footerLabel")}
                        </p>
                        <h4 className='text-white'>+998 99 897-45-04</h4>
                     </div>
                     <div className='mt-5'>
                        <p className="label">
                           {t("footerAdress")}
                        </p>
                        <h4 className='text-white'>
                           NH 234   Public Square San Francisco  65368
                        </h4>
                     </div>
                     <div className="mt-5">
                        <p className="label">
                           {t("footerWork")}
                        </p>
                        <h4 className="text-white">
                           {t(
                              "footerWorkdays"
                           )}
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </FooterWrapper>
      </footer>
   )
}

export default Footer
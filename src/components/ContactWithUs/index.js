import React from 'react'
import TitleH1 from '../TitleH1'
import ContactButton from '../ContactButton'
import { useTranslation } from 'react-i18next'
const ContactWithUs = () => {
   const { t, i18n } = useTranslation()
   return (
      <div className="container px-5">
         <div className="row">
            <div className="col-11 offset-1">
               <div className="row align-items-center justify-content-center gap-3">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                     <TitleH1 title={t("checkoutCourse")} />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                     <ContactButton />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactWithUs
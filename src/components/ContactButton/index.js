import React from 'react'
import { ContactButtonWrapper } from '../../styles'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
const ContactButton = () => {
   const navigate = useNavigate()
   const { t, i18n } = useTranslation()
   return (
      <div>
         <ContactButtonWrapper onClick={() => navigate("/contact")}>
            {t("contactus")}
         </ContactButtonWrapper>
      </div>
   )
}

export default ContactButton
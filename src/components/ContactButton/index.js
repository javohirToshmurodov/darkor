import React from 'react'
import { ContactButtonWrapper } from '../../styles'
import { useTranslation } from 'react-i18next'
const ContactButton = () => {
   const { t, i18n } = useTranslation()
   return (
      <div>
         <ContactButtonWrapper>
            {t("contactus")}
         </ContactButtonWrapper>
      </div>
   )
}

export default ContactButton
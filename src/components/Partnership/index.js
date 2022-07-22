import React from 'react'
import { PartnershipWrapper } from '../../styles'
import { useTranslation } from 'react-i18next'
import bank from "../../assets/images/bank.svg"
import PartnersCard from '../PartnersCard'
import cardpic from '../../assets/images/cardpic.svg'
const Partnership = () => {
   const { t, i18n } = useTranslation()
   return (
      <>
         <PartnershipWrapper>
            <div className='px-5 d-flex justify-content-center align-items-center flex-column'>
               <p className='littleP'>{t("partnershipP")}</p>
               <h2>{t("parnterwith")}</h2>
               <p className='subtitle'>{t("partnershipSubtitle")}</p>
            </div>
            <div className="container px-5 py-5">
               <div className="row px-5">
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
                  <PartnersCard img={bank} />
               </div>
            </div>
         </PartnershipWrapper>
      </>
   )
}

export default Partnership
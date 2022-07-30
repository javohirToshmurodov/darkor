import React, { useEffect, useState } from 'react'
import { PartnershipWrapper } from '../../styles'
import { useTranslation } from 'react-i18next'
import bank from "../../assets/images/bank.svg"
import PartnersCard from '../PartnersCard'
import cardpic from '../../assets/images/cardpic.svg'
import { instance } from '../../redux/actions'
const Partnership = () => {
   const { t, i18n } = useTranslation()
   const [partners, setPartners] = useState([])
   const getPartners = () => {
      instance.get("/api/v1/partner/list").then((res) => {
         console.log("partnerlar listi", res.data);
         setPartners([...res.data.body])
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getPartners()
      console.log(partners);
   }, [])
   return (
      <>
         <PartnershipWrapper >
            <div className='px-5  d-flex justify-content-center align-items-center flex-column'>
               <p className='littleP'>{t("partnershipP")}</p>
               <h2>{t("parnterwith")}</h2>
               <p className='subtitle'>{t("partnershipSubtitle")}</p>
            </div>
            <div className="container px-5 py-4">
               <div className="px-5 row">
                  {
                     partners.map((e, i) => <PartnersCard key={e.id} linkTo={e?.link} img={e?.logo?.url} />)
                  }
               </div>
            </div>
         </PartnershipWrapper>
      </>
   )
}

export default Partnership
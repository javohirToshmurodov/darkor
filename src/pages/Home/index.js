import React from 'react'
import DefaultButton from '../../components/DefaultButton'
import { useTranslation } from 'react-i18next'
export default function Home() {
   const { t, i18n } = useTranslation()
   return (
      <div>
         <section >

            <DefaultButton title={t("btnText")} />
         </section>
      </div>
   )
}

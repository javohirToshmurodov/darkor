import React from 'react'
import { useTranslation } from 'react-i18next'
import { TextH1 } from '../../styles'
export default function TitleH1(props) {
   const { t, i18n } = useTranslation()
   return (
      <TextH1>
         {props.title}
      </TextH1>
   )
}

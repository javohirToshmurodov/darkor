import React from 'react'
import { DefaultCardWrapper } from '../../styles'
import DefaultButton from '../DefaultButton'
import { useTranslation } from 'react-i18next'
export default function DefaultCard(props) {
  const { t, i18n } = useTranslation()
  return (
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 justify-content-center d-flex mb-5  '>
      <DefaultCardWrapper>
        <img className='img-fluid' src={props.img} alt="" />
        <div className="pe-3">
          <h5 className='title mt-2'>{props.title}</h5>
          <p className='subtitle'>{props.subtitle}</p>
        </div>
        <div className="line"></div>
        <DefaultButton title={t("btnText")} />
      </DefaultCardWrapper>

    </div>
  )
}

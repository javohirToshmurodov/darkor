import React from 'react'
import { DefaultCardWrapper } from '../../styles'
import DefaultButton from '../DefaultButton'
import { useTranslation } from 'react-i18next'
export default function DefaultExpertCard(props) {
    const { t, i18n } = useTranslation()
    return (
        <div className='mb-5 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 justify-content-center d-flex '>
            <DefaultCardWrapper>
                <img className='img-fluid' src={props.img} alt="" />
                <div className="pe-3">
                    <h5 className='mt-2 title'>{t("name")}: {props.title}</h5>
                    <p className='subtitle'>{t("expertProfession")}<br />{props.subtitle}</p>
                </div>
                <div className="line"></div>
                <DefaultButton title={t("expertbtntext")} id={props.code} />
            </DefaultCardWrapper>

        </div>
    )
}
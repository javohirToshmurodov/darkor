import React from 'react'
import { DefaultCardWrapper } from '../../styles'
import DefaultButton from '../DefaultButton'
import { useTranslation } from 'react-i18next'
export default function DefaultExpertCard(props) {
    const { t, i18n } = useTranslation()
    return (
        <div className='flex mb-5 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12'>
            <DefaultCardWrapper>
                <img className='object-cover' src={props.img} alt="" />
                <div>
                    <h5 className='mt-2 text-2xl leading-8 truncate'>{t("name")} {props.title}</h5>
                    <p className='subtitle'>{t("expertProfession")}<br />{props.subtitle}</p>
                </div>
                <div className="line"></div>
                <DefaultButton title={t("expertbtntext")} id={props.code} />
            </DefaultCardWrapper>
        </div>
    )
}

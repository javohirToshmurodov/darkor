import React from 'react'
import { DefaultCardWrapper } from '../../styles'
import DefaultButton from '../DefaultButton'
import { useTranslation } from 'react-i18next'
export default function DefaultExpertCard(props) {
    const { t, i18n } = useTranslation()
    return (
        <div className='py-3 mb-5 duration-500 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
            <DefaultCardWrapper>
                <div className='flex flex-col items-center justify-center mx-auto text-center sm:items-start sm:justify-start sm:flex-row sm:block sm:m-0'>
                    <img className='object-cover' src={props.img} alt="" />
                    <div>
                        <h5 className='mt-2 text-2xl leading-8 truncate max-w-[250px] sm:text-left'>{t("name")}{props.title}</h5>
                        <p className='subtitle sm:text-left'>{t("expertProfession")}<br />{props.subtitle}</p>
                    </div>
                    <div className="line"></div>
                    <DefaultButton title={t("expertbtntext")} id={props.code} />
                </div>
            </DefaultCardWrapper>
        </div>
    )
}

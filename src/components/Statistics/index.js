import React from 'react';
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

function Statistics(props) {
    const { t, i18n } = useTranslation()
    return (
        <div className='container mb-10 px-5 py-5'>
            <div>
                <h1 className='text-[44px] font-bold not-italic leading-[106px] mt-2'>{t('employmentResults')}</h1>
                <div className='flex'>
                    <Logo className='mt-[20px]' />
                    <h1 className='text-blueColor text-[44px] font-bold not-italic leading-[106px]'>{t('results')}</h1>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Statistics;
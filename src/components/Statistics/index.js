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
                <div className='d-flex align-items-end'>
                    <Logo style={{ "width": "168px", "height": "100px" }} className='mt-[20px] mr-[10px]' />
                    <h1 className='align-self-end text-blueColor text-[44px] font-bold not-italic '>  {t('results')}</h1>
                </div>
            </div>
            <div className='flex gap-5 overflow-x-scroll scrollbar-hide'>
                <div className='hover:bg-hoverBgColor hover:duration-500 duration-500 rounded-3xl px-4 py-6 h-[180px] w-[247px] snap-center'>
                    <span className='bg-green-600 text-white p-1 rounded-lg'>100%</span>
                    <p className='max-w-[212px] font-semibold text-sm mt-2 '>{t('statistic1')}</p>
                </div>
                <div className='hover:bg-hoverBgColor hover:duration-500 duration-500 rounded-3xl px-4 py-6 h-[180px] w-[247px] snap-center'>
                    <span className='bg-green-600 text-white p-1 rounded-lg'>95%</span>
                    <p className='max-w-[212px] font-semibold text-sm mt-2 '>{t('statistic2')}</p>
                </div>
                <div className='hover:bg-hoverBgColor hover:duration-500 duration-500 rounded-3xl px-4 py-6 h-[180px] w-[247px] snap-center'>
                    <span className='bg-green-600 text-white p-1 rounded-lg'>1200+</span>
                    <p className='max-w-[212px] font-semibold text-sm mt-2 '>{t('statistic3')}</p>
                </div>
                <div className='hover:bg-hoverBgColor hover:duration-500 duration-500 rounded-3xl px-4 py-6 h-[180px] w-[247px] snap-center'>
                    <span className='bg-green-600 text-white p-1 rounded-lg'>100%</span>
                    <p className='max-w-[212px] font-semibold text-sm mt-2 '>{t('statistic4')}</p>
                </div>
                <div className='hover:bg-hoverBgColor hover:duration-500 duration-500 rounded-3xl px-4 py-6 h-[180px] w-[247px] snap-center'>
                    <span className='bg-green-600 text-white p-1 rounded-lg'>139+</span>
                    <p className='max-w-[212px] font-semibold text-sm mt-2 '>{t('statistic5')}</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
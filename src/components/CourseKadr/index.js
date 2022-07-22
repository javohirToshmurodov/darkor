import React from 'react'
import PersonCrop from '../../assets/icons/person.crop.rectangle.stack.fill.png'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { FaGraduationCap } from 'react-icons/fa'
import TitleH1 from '../TitleH1'
import DefaultButton from '../DefaultButton'

function CourseKadr(props) {
  const { t, i18n } = useTranslation()

  return (
    <div className='container flex items-center justify-around mb-10'>
      <div className='p-4 hover:bg-backgroundColor hover:duration-500 duration-500 rounded-3xl w-[588px]'>
        <FaGraduationCap className='text-[50px] text-blue-600' />
        <h3 className='text-[32px] font-bold not-italic leading-10 mt-1'>
          {t('Ourcourses')}
        </h3>
        <p className='text-xl not-italic font-semibold leading-7 text-fontColor max-w-[348px] mt-1 mb-20'>
          {t('Ourcoursestools')}
        </p>
        <DefaultButton title={t('coursenumber')} className='mt-10' />
      </div>
      <div className='p-4 hover:bg-backgroundColor hover:duration-500 duration-500 rounded-3xl w-[588px]'>
        <img src={PersonCrop} width='50px' className='w-[40px]' />
        <h3 className='text-[32px] font-bold not-italic leading-10 mt-2'>
          {t('Ourpersonnel')}
        </h3>
        <p className='text-xl not-italic font-semibold leading-7 text-fontColor max-w-[348px] mt-1 mb-20'>
          {t('Ourcoursestools')}
        </p>
        <DefaultButton title={t('personnelnumber')} />
      </div>
    </div>
  )
}

export default CourseKadr
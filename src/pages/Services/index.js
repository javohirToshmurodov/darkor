import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import Header from '../../components/header'
import { instance } from '../../redux/actions'
import { useTranslation } from 'react-i18next'
import Media from '../../components/media'
import Static from '../../components/static'

const Services = () => {
   const [state, setState] = useState([])
   const [loading, setLoading] = useState(false)
   const getMedia = async () => {
      setLoading(true)
      try {
         const res = await instance.get('api/v1/post/list?size=10&page=0')
         setState(res.data)
         console.log(res.data);
         setLoading(false)
      } catch (err) {
         setLoading(false)
      }
   }

   useEffect(() => {
      getMedia()
   }, [])

   const { t, i18n } = useTranslation()
   return (
      <Spin spinning={loading}>
         <Header
            link={t('servicesLink')}
            title={t('servicesTitle')}
            description={t('servicesDescription')}
            firstButtonTitle={t('firstButtonTitle')}
            secondButtonTitle={t('secondButtonTitle')}
         />
         <Media data={state} loading={loading} setLoading={setLoading} />
         <Static />
      </Spin>
   )
}

export default Services
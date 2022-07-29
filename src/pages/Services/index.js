import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import Header from '../../components/header'
import { instance } from '../../redux/actions'
import { useTranslation } from 'react-i18next'
import Media from '../../components/media'
import Static from '../../components/static'
import { Collapse } from 'antd'
import Partnership from '../../components/Partnership'
import Footer from '../../components/Footer'

const Services = () => {
   const { Panel } = Collapse
   const [state, setState] = useState([])
   const [loading, setLoading] = useState(false)
   const [faq, setFaq] = useState([])
   const getMedia = async () => {
      setLoading(true)
      try {
         const res = await instance.get('api/v1/post/list?size=10&page=0')
         setState(res.data)
         console.log(res.data)
         setLoading(false)
      } catch (err) {
         setLoading(false)
      }
   }

   const getFaq = () => {
      setLoading(true)
      instance
         .get(`api/v1/faq/list?size=10&page=0&lang=uz`)
         .then((res) => {
            console.log('Bu result', res)
            setFaq([...res.data.body])
            setLoading(false)
         })
         .catch((err) => console.log(err))
   }

   useEffect(() => {
      getMedia()
      getFaq()
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
         <div className='mt-4'>
            <Partnership />
         </div>
         <div className='container mt-4'>
            <h1>Faq is here</h1>
            <Collapse className='mt-4' defaultActiveKey={['1']}>
               {faq?.map((e, i) => (
                  <Panel header={e.question}>
                     <p>{e.answer}</p>
                  </Panel>
               ))}
            </Collapse>
         </div>
         <div className='mt-4'>
            <Footer />
         </div>
      </Spin>
   )
}

export default Services
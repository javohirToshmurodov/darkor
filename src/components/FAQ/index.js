import React, { useState, useEffect } from 'react'
import { Collapse } from 'antd'
import { instance } from "../../redux/actions";



const FAQ = () => {
   const { Panel } = Collapse;

   const [faq, setFaq] = useState([])

   const getFaq = () => {
      instance
         .get(`api/v1/faq/list?size=10&page=0`)
         .then((res) => {
            setFaq([...res.data.body])
         })
         .catch((err) => console.log(err))
   }

   useEffect(() => {
      getFaq()
   }, []);


   return (
      <Collapse className='mt-4' defaultActiveKey={['1']}>
         {faq?.map((e, i) => (
            <Panel key={i} header={e.question}>
               <p>{e.answer}</p>
            </Panel>
         ))}
      </Collapse>
   )
}

export default FAQ
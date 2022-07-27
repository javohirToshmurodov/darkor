import React, { useEffect, useState } from 'react'
import { instance } from '../../redux/actions'
import { Collapse } from 'antd';
const { Panel } = Collapse;
export default function Faq() {
   const [faq, setFaq] = useState({})

   const getFaq = () => {
      instance.get("/api/v1/faq/list_by_course_code/5ffdef7c-d816-4404-a082-9461b81488f2?size=10&page=0&lang=uz").then((res) => {
         console.log(res.data);
      }).catch((err) => console.log(err))
   }
   useEffect(() => {
      getFaq()
      console.log("faq chiqdi");
   }, [])
   return (
      <div>
         FAQ IS HERE
      </div>
   )
}

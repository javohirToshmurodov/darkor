// import React, { useEffect, useState } from 'react'
// import { instance } from '../../redux/actions'
// import { Collapse, Spin } from 'antd';
// const { Panel } = Collapse;
// export default function Faq(props) {
//    const [faq, setFaq] = useState([])
//    const [loading, setLoading] = useState(false)
//    const getFaq = () => {
//       setLoading(true)
//       instance.get(`/api/v1/faq/list_by_course_code/${props?.courseId}?size=10&page=0&lang=uz`).then((res) => {
//          console.log(res.data.body);
//          setFaq([...res.data.body])
//          setLoading(false)
//       }).catch((err) => console.log(err))
//    }
//    useEffect(() => {
//       getFaq()
//       console.log("faqlar shuyerda", faq);
//       console.log(props);
//    }, [])
//    return (
//       faq && <Spin spinning={loading}>
        
//       </Spin >
//    )
// }

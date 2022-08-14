import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddFaq from '../../../components/AddFaq'
import { instance } from '../../../redux/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Faq = () => {

   const [courses, setCourses] = useState([])
   const [show, setShow] = useState(false);
   const [courseObj, setCourseObj] = useState({})
   const [data, setData] = useState({
      questionUz: "",
      questionRu: "",
      questionEn: "",
      answerUz: "",
      answerRu: "",
      answerEn: "",
      course: {}
   })
   const getCourses = () => {
      instance.get('/api/v1/course/list/?size=10&page=0')
         .then((res) => {
            console.log(res.data);
            setCourses([...res.data.body])
         })
         .catch((err) => console.log(err))
   }


   const handleChange = (e) => {
      const { value, name } = e.target
      data[name] = value
      setData({ ...data })
   }
   useEffect(() => {
      getCourses()
   }, [])
   return (
      <div className='col-xl-7 col-lg-7 col-md-8 col-sm-9 col-11'>


         <Form>
            <Form.Group className="mb-3" controlId="formBasdicsEmail">
               <Form.Label>Savol matni uz</Form.Label>
               <Form.Control value={data.questionUz} onChange={(e) => handleChange(e)} type="text" placeholder="..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiscEmail">
               <Form.Label>Savol matni ru</Form.Label>
               <Form.Control value={data.questionRu} onChange={(e) => handleChange(e)} type="text" placeholder="..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasdicEmail">
               <Form.Label>Savol matni eng</Form.Label>
               <Form.Control value={data.questionEn} onChange={(e) => handleChange(e)} type="text" placeholder="..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fo3rmBasdicEmail">
               <Form.Label>Javob matni uz</Form.Label>
               <Form.Control value={data.answerUz} onChange={(e) => handleChange(e)} type="text" placeholder="..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fo2rmBasdicEmail">
               <Form.Label>Javob matni ru</Form.Label>
               <Form.Control value={data.answerRu} onChange={(e) => handleChange(e)} type="text" placeholder="..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="f1ormBasdicEmail">
               <Form.Label>Javob matni eng</Form.Label>
               <Form.Control value={data.answerEn} onChange={(e) => handleChange(e)} type="text" placeholder="..." />
            </Form.Group>
            <Form.Group className='mb-3' controlId='select'>
               <Form.Select>
                  <option value="">Kursni tanlang</option>
                  {
                     courses.map((e, i) => <option key={i}>
                        {e.name}
                     </option>)
                  }
               </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   )
}

export default Faq
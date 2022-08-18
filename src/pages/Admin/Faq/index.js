import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddFaq from '../../../components/AddFaq'
import { instance } from '../../../redux/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap'
import { Spin } from 'antd'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Faq = () => {
   const [loading, setLoading] = useState(false)
   const [courses, setCourses] = useState([])
   const [show, setShow] = useState(false);
   const [courseObj, setCourseObj] = useState({})
   const [questionUz, setQuestionUz] = useState("")
   const [questionRu, setQuestionRu] = useState("")
   const [questionEn, setQuestionEn] = useState("")
   const [answerUz, setAnswerUz] = useState("")
   const [answerRu, setAnswerRu] = useState("")
   const [answerEn, setAnswerEn] = useState("")
   const [faq, setFaq] = useState([])

   const getFaq = () => {
      setLoading(true)
      instance
         .get(`api/v1/faq/list?size=10&page=0`)
         .then((res) => {
            console.log(res.data);
            setFaq([...res.data.body])
         })
         .catch((err) => console.log(err))


      setLoading(false)
   }

   const getCourses = () => {
      instance.get('/api/v1/course/list/?size=10&page=0')
         .then((res) => {
            console.log(res.data);
            setCourses([...res.data.body])
         })
         .catch((err) => console.log(err))
   }
   const handleCourse = (e) => {
      console.log(e.target.value);
      const courseid = e.target.value

      instance.get(`/api/v1/course/get/${courseid}`).then((res) => {
         console.log(res.data.body);
         setCourseObj({ ...res.data.body })
      })
   }
   const addFaq = (e) => {
      e.preventDefault()
      console.log(questionUz, questionRu, questionEn, answerUz, answerRu, answerEn);

      instance.post("/api/v1/faq/create", {
         questionUz: `${questionUz}`,
         questionRu: `${questionRu}`,
         questionEn: `${questionEn}`,
         answerUz: `${answerUz}`,
         answerRu: `${answerRu}`,
         answerEn: `${answerEn}`,
         course: {
            ...courseObj
         }
      }).then((res) => {
         console.log(res.data);
      })
   }
   const delFaq = (code) => {
      console.log(code);
   }
   useEffect(() => {
      getCourses()
      getFaq()
   }, [])
   return (
      <Spin spinning={loading}>
         <div className='col-xl-7 col-lg-7 col-md-8 col-sm-9 col-11'>

            <Form onSubmit={addFaq}>
               <Form.Group className="mb-3" controlId="formsBasdicsEmail">
                  <Form.Label>Savol matni uz</Form.Label>
                  <Form.Control onChange={(e) => setQuestionUz(e.target.value)} type="text" placeholder="..." />

               </Form.Group>
               <Form.Group className="mb-3" controlId="forsmBasiscEmail">
                  <Form.Label>Savol matni ru</Form.Label>
                  <Form.Control onChange={(e) => setQuestionRu(e.target.value)} type="text" placeholder="..." />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formsBasdicEmail">
                  <Form.Label>Savol matni eng</Form.Label>
                  <Form.Control onChange={(e) => setQuestionEn(e.target.value)} type="text" placeholder="..." />
               </Form.Group>
               <Form.Group className="mb-3" controlId="fo3rmBasdicEmail">
                  <Form.Label>Javob matni uz</Form.Label>
                  <Form.Control onChange={(e) => setAnswerUz(e.target.value)} type="text" placeholder="..." />
               </Form.Group>
               <Form.Group className="mb-3" controlId="fo2rmBasdicEmail">
                  <Form.Label>Javob matni ru</Form.Label>
                  <Form.Control onChange={(e) => setAnswerRu(e.target.value)} type="text" placeholder="..." />
               </Form.Group>
               <Form.Group className="mb-3" controlId="f1ormBasdicEmail">
                  <Form.Label>Javob matni eng</Form.Label>
                  <Form.Control onChange={(e) => setAnswerEn(e.target.value)} type="text" placeholder="..." />
               </Form.Group>
               <Form.Group className='mb-3' controlId='select'>
                  <Form.Select onChange={(event) => handleCourse(event)}>
                     <option value="">Kursni tanlang</option>
                     {
                        courses.map((e, i) => <option value={e.id} key={i}>
                           {e.name}
                        </option>)
                     }
                  </Form.Select>
               </Form.Group>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>

            <h3 className='text-center mt-5 mb-3'>Savollar jadvali</h3>
            <Table className='' bordered striped variant='light'>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Savol</th>
                     <th>Javob</th>
                     <th>Kursga tegishli</th>
                     <th>Crud</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     faq?.map((e, i) => <tr key={e.id}>
                        <td>{i + 1}</td>
                        <td>{e.question}</td>
                        <td>{e.answer}</td>
                        <td>{e.course.name}</td>
                        <td>
                           <div className="d-flex gap-2">
                              <Button variant='warning'>
                                 <FaEdit />
                              </Button>
                              <Button onClick={() => delFaq(e.code)} variant='danger'>
                                 <FaTrashAlt />
                              </Button>
                           </div>
                        </td>
                     </tr>)
                  }
               </tbody>
            </Table>
         </div>
      </Spin>
   )
}

export default Faq
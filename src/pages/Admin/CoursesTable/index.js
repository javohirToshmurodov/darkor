import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { instance } from '../../../redux/actions';
import { CourseImgWrapper } from '../../../styles';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import EditCouresModal from '../../../components/EditCourseModal';
import { useNavigate } from 'react-router-dom';
const CoursesTable = () => {
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(false)
   const [show, setShow] = useState(false);
   const [courseId, setCourseId] = useState("")
   const handleClose = () => setShow(false);
   const [size, setSize] = useState(10)
   const handleShow = () => setShow(true);
   const navigate = useNavigate()
   const getCourses = () => {
      setLoading(true)
      instance.get(`api/v1/course/list/?size=${size}&page=0`).then((res) => {
         setCourses([...res.data.body])
         setLoading(false)
      }).catch((err) => {
         console.log(err);
      })
   }
   const deleteCourse = (event, id) => {
      console.log(id);
      setLoading(true)
      instance.delete(`/api/v1/courseDetails/delete/${id}`).then((res) => {
         alert("Kurs muvaffaqiyatli o'chirildi")
         getCourses()
      }).catch((err) => {
         console.log(err);
      })
   }
   const moreCourse = () => {
      setSize(size => size + 10)
   }
   useEffect(() => {
      getCourses()
   }, [size])

   const openEdit = (event, id) => {
      setCourseId(id)
      navigate(`${id}`)
   }

   return (
      <Spin spinning={loading}>
         <Table striped bordered hover variant='dark'>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Course Description</th>
                  <th>Crud</th>
               </tr>
            </thead>
            <tbody>
               {
                  courses?.map((e, i) => <tr key={e.code}>
                     <td>{i + 1}</td>
                     <td className=''>
                        <div className="d-flex gap-3">

                           <CourseImgWrapper src={`${e?.galleries[0]?.url}`} className="img-fluid" alt='rasm topilmadi' />
                           {e.name}
                        </div>
                     </td>
                     <td>
                        {
                           e.description
                        }
                     </td>
                     <td className=''>
                        <div className="d-flex gap-2 justify-content-center">

                           <Button variant="warning" onClick={(event) => openEdit(event, e.id)}>
                              <FaPenAlt />
                           </Button>
                           <Button variant="danger" onClick={(event) => deleteCourse(event, e.id)}>
                              <FaTrashAlt />
                           </Button>
                        </div>

                     </td>
                  </tr>)
               }
               {/* {
                  show ? <EditCouresModal id={courseId} show={show} handleClose={handleClose} handleShow={handleClose} /> : ""
               } */}
            </tbody>
         </Table>
         <div className="text-end">
            <button onClick={moreCourse} className="btn btn-dark">More...</button>
         </div>
      </Spin>
   )
}

export default CoursesTable
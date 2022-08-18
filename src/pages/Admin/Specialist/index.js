import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { instance } from '../../../redux/actions'
import { CourseImgWrapper } from '../../../styles'

const SpecialistAccess = () => {

   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(false)
   const [size, setSize] = useState(10)
   const navigate = useNavigate()
   const getAccessedUsers = () => {
      setLoading(true)
      instance.get(`/api/v1/user-employee/get-for-admin?size=${size}&page=0`).then((res) => {
         setUsers([...res.data.body])
      }).catch((err) => {
         console.log(err);
      })
   }

   const moreCourse = () => {
      setSize(size => size + 10)
   }
   useEffect(() => {
      getAccessedUsers()
   }, [size])


   const giveAccess = (event, id) => {
      console.log(id);
      let access = event.target.value
      instance.post(`/api/v1/user-employee/give-access/${id}/${access}`).then((res) => {
         console.log(res.data);
         if (res.data.success) {
            getAccessedUsers()
         } else {

         }
      }).catch((err) => {
         console.log(err);
      })

   }

   return (
      <Spin spinning={
         ""
      }>
         <Table striped bordered hover variant="light">
            <thead>
               <tr>
                  <th>
                     ID
                  </th>
                  <th>F.I.O</th>
                  <th>
                     Details
                  </th>

                  <th>
                     Access
                  </th>
                  <th>
                     GiveAccess
                  </th>
               </tr>
            </thead>
            <tbody>
               {
                  users?.map((e, i) => <tr key={e.code} >
                     <td>{e.id}</td>
                     <td className=''>
                        <div className='d-flex gap-3'>

                           <CourseImgWrapper src={e.gallery.url} />
                           {e.fullName}
                        </div>
                     </td>
                     <td>

                        <button onClick={() => navigate(`${e.id}`)} className="btn btn-primary">
                           Info
                        </button>

                     </td>
                     <td className='accessedUser' style={{ "fontSize": "18px", "textTransform": "capitalize" }}>
                        {e.access ? "true" : "false"}
                     </td>
                     <td className='text-center d-flex justify-content-center'>

                        <Form.Select onChange={(event) => giveAccess(event, e.id)} style={{ "width": "150px" }}>
                           <option value="">Tanlang</option>

                           <option value="true">true</option>
                           <option value="false">false</option>

                        </Form.Select>
                     </td>
                  </tr>)
               }
            </tbody>
         </Table>
         <div className="text-center">
            <button onClick={moreCourse} className="btn btn-dark">More....</button>
         </div>
      </Spin>
   )
}

export default SpecialistAccess
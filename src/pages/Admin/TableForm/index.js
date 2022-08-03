import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { instance } from '../../../redux/actions';
import moment from 'moment/dist/moment'

const TableFormUsers = () => {
   const [loading, setLoading] = useState(false)
   const [users, setUsers] = useState([])

   const getFormedUsers = () => {
      setLoading(true)
      instance.get("/api/v1/register/?size=10&page=0").then((res) => {
         setUsers([...res.data.body])
         setLoading(false)
      })
         .catch((err) => console.log(err))

   }
   useEffect(() => {
      getFormedUsers()
   }, [])
   return (
      <Spin spinning={loading}>
         <Table striped bordered hover variant='dark'>
            <thead>
               <tr>
                  <th>
                     #
                  </th>
                  <th>FullName</th>
                  <th>Birthday</th>
                  <th>Coursename</th>
                  <th>Type</th>
                  <th>adress</th>
                  <th>Phone number</th>
                  <th>CreatedAt</th>
               </tr>
            </thead>
            <tbody>
               {
                  users.map((e, i) => <tr key={i}>

                     <td>{i + 1}</td>
                     <td>{e.fullName}</td>
                     <td>{e.birthday}</td>
                     <td>{e.courseName}</td>
                     <td>{e.dataType}</td>
                     <td>{e.address}</td>
                     <td>{e.phoneNumber}</td>
                     <td>{e.createdAt.slice(0, 19)}</td>
                     {/* {console.log(e.createdAts.split(""))} */}
                  </tr>)
               }
            </tbody>
         </Table>
      </Spin>
   )
}

export default TableFormUsers
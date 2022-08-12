import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaPen, FaTrash } from 'react-icons/fa'
import EditPartner from '../../../components/EditPartner'
import { instance } from '../../../redux/actions'
import { CourseImgWrapper, UploadedImg } from '../../../styles'

const Partner = () => {
   const { t } = useTranslation()
   const [file, setFile] = useState({})
   const [title, setTitle] = useState("")
   const [url, setUrl] = useState("")
   const [id, setId] = useState("")
   const [partners, setPartners] = useState([])
   const [loading, setLoading] = useState(false)
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const fileUpload = (e) => {
      setLoading(true)
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/LOGO", formData).then((res) => {
         setFile({ ...res.data.body })
         alert("file muvaffaqiyatli yuklandi")
         setLoading(false)

      }).catch((err) => {
         console.log(err);
      })
   }
   const addSubmit = (e) => {
      setLoading(true)
      e.preventDefault()

      instance.post("/api/v1/partner/add", {
         logo: {
            ...file
         },
         link: `${title}`
      }).then((res) => {
         if (res.data.success) {
            alert("Muvaffaqiyatli qo'shildi")
            setTitle("")
            setFile({})
            setLoading(false)
            getPartner()
         }
      }).catch(err => console.log(err))
   }
   const getPartner = () => {

      instance.get("/api/v1/partner/list").then((res) => {
         setPartners([...res.data.body])
      }).catch(err => console.log(err))
   }
   const deletePartner = (id) => {
      setLoading(true)
      instance.delete(`/api/v1/partner/deleted/${id}`).then((res) => {
         if (res.data.success) {
            alert(
               "Muvaffaqiyatli o'chirildi"
            )
            getPartner()
         }
      }).catch((err) => console.log(err))
      setLoading(false)
   }
   const editPart = (event, txt, id) => {
      setId(id)
      setTitle(txt)
      return handleShow()
   }
   useEffect(() => {
      getPartner()
   }, [show])
   return (
      <Spin spinning={loading} >
         <div className="shadow rounded p-3 col-6">

            <Form onSubmit={addSubmit}>
               <h5 className="text-center">Hamkor qo'shish</h5>

               <Form.Group className='mb-3' controlId='form1'>
                  <Form.Label>Havola</Form.Label>
                  <Form.Control onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Link' />
               </Form.Group>

               <Form.Group controlId='form3'>
                  <Form.Label>Hamkorlik rasmini yuklang</Form.Label>
                  <Form.Control onChange={(e) => fileUpload(e.target.files[0])} type='file' placeholder='' />
               </Form.Group>
               <div className='mt-3'>
                  {
                     file?.url && <UploadedImg src={file?.url} />
                  }
               </div>
               <div className="text-center mt-3">

                  <Button type='submit'>
                     {t("add")}
                  </Button>
               </div>

            </Form>
         </div>


         <div className='mt-5'>
            <h4>Hamkorlar ro'yxati</h4>
            <Table bordered hover striped variant='light'>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Partner</th>
                     <th>U/D</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     partners?.map((e, i) => <tr key={i}>
                        <td>{e.id}</td>
                        <td>
                           <div className="d-flex gap-3">
                              <CourseImgWrapper src={e.logo.url} />
                              {e.link}
                           </div>
                        </td>
                        <td>
                           <div className="d-flex gap-2">
                              <Button onClick={(event) => editPart(event, e.link, e.id)} variant='warning'>
                                 <FaPen />
                              </Button>
                              <Button onClick={() => deletePartner(e.id)} variant='danger'>
                                 <FaTrash />
                              </Button>
                           </div>
                        </td>
                     </tr>)
                  }
               </tbody>
            </Table>
            {
               show ? <EditPartner id={id} show={show} setShow={setShow} title={title} handleClose={handleClose} /> : ""
            }
         </div>
      </Spin>
   )
}

export default Partner
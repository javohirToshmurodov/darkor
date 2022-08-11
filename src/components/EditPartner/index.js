import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UploadedImg } from '../../styles';
import { instance } from '../../redux/actions';
import { useParams } from 'react-router-dom';

const EditPartner = (props) => {
   const [file, setFile] = useState({})
   const { id } = useParams()
   const [title, setTitle] = useState("")
   const [partners, setPartners] = useState({})
   const fileUpload = (e) => {
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/LOGO", formData).then((res) => {
         setFile({ ...res.data.body })
         alert("file muvaffaqiyatli yuklandi")

      }).catch((err) => {
         console.log(err);
      })
   }
   const getPart = () => {
      instance.get(`/api/v1/partner/getOne/${props?.id}`).then((res) => {
         setPartners({ ...res.data.body })
      })
   }

   const editHamkor = (e) => {
      e.preventDefault()

      instance.put("/api/v1/partner/updated", {
         code: `${partners.code}`,
         id: `${partners.id}`,
         logo: {
            ...file
         },
         link: `${title}`
      }).then((res) => {
         if (res.data.success) {
            alert("Muvaffaqiyatli tahrirlandi")
            props.handleClose()
         }
      })
   }
   useEffect(() => {
      getPart()
   }, [props.id])
   return (
      <Modal
         show={props.show}
         onHide={props.handleClose}
         backdrop="static"
         keyboard={false}
      >
         <Modal.Header closeButton>
            <Modal.Title>Tahrirlash</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form onSubmit={editHamkor}>

               <Form.Group className='mb-3' controlId='form3'>
                  <Form.Label>Havola</Form.Label>
                  <Form.Control onChange={(e) => setTitle(e.target.value)} defaultValue={partners.link} type='text' placeholder='Link' />
               </Form.Group>
               <Form.Group className='mb-3' controlId='forms3'>
                  <Form.Label>Hamkorlik rasmini yuklang</Form.Label>
                  <Form.Control onChange={(e) => fileUpload(e.target.files[0])} type='file' placeholder='' />
               </Form.Group>
               <div className='my-3'>
                  {
                     file?.url && <UploadedImg src={file?.url} />
                  }
               </div>
               <div className="text-end">
                  <Button type='submit' variant="primary">Submit</Button>

               </div>
            </Form>
         </Modal.Body>
      </Modal >
   )
}

export default EditPartner
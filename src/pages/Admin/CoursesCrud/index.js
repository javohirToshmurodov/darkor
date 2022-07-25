import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { instance } from '../../../redux/actions';

const CoursesCrud = () => {

   const [nameUz, setNameUz] = useState("")
   const [nameRu, setNameRu] = useState("")
   const [nameEn, setNameEn] = useState("")
   const [descriptionUz, setDescriptionUz] = useState("")
   const [descriptionRu, setDescriptionRu] = useState("")
   const [descriptionEn, setDescriptionEn] = useState("")
   const [courseData, setCourseData] = useState({})
   const handleCourseSubmit = (e) => {
      e.preventDefault()
      console.log(nameUz, nameRu, nameEn, descriptionUz, descriptionRu, descriptionEn);
   }
   const handleFileMediaUz = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("fileUz", e)

      instance.post("upload/MEDIA").then((res) => {
         console.log(res.data);
      }).catch((err) => {
         console.log(err);
      })
   }
   const handleFileMediaRu = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)
   }

   const handleFileMediaEn = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)
   }


   return (
      <div className='row'>
         <div className="col-md-8 offset-2">

            <Form onSubmit={handleCourseSubmit}>
               <Form.Group className="mb-3" controlId="formBasicnameUz">
                  <Form.Label >Name Uz</Form.Label>
                  <Form.Control onChange={(e) => setNameUz(e.target.value)} type="text" placeholder="Enter NameUz" />
               </Form.Group>
               <Form.Group className='mb-3' controlId='formBasicnameRu'>
                  <Form.Label >Name RU</Form.Label>
                  <Form.Control onChange={(e) => setNameRu(e.target.value)} type="text" placeholder="Enter NameRu" />
               </Form.Group>
               <Form.Group className='mb-3' controlId='formBasicnameEn'>
                  <Form.Label >Name Eng</Form.Label>
                  <Form.Control onChange={(e) => setNameEn(e.target.value)} type="text" placeholder="Enter NameEng" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description Uz</Form.Label>
                  <Form.Control onChange={(e) => setDescriptionUz(e.target.value)} as="textarea" rows={3} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                  <Form.Label>Description Ru</Form.Label>
                  <Form.Control onChange={(e) => setDescriptionRu(e.target.value)} as="textarea" rows={3} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                  <Form.Label>Description Eng</Form.Label>
                  <Form.Control onChange={(e) => setDescriptionEn(e.target.value)} as="textarea" rows={3} />
               </Form.Group>

               <div className='d-flex gap-3'>
                  <div>
                     <Form.Group className='mb-3' controlId='formFileUz'>
                        <Form.Label>Image Uz</Form.Label>
                        <Form.Control onChange={(e) => handleFileMediaUz(e.target.files[0])} name="fileUz" type='file' placeholder='file Uz' />
                     </Form.Group>
                  </div>
                  <div>
                     <Form.Group className='mb-3' controlId='formFileRu'>
                        <Form.Label>Image Ru</Form.Label>
                        <Form.Control onChange={(e) => handleFileMediaUz(e.target.files[0])} name="fileRu" type='file' placeholder='file Uz' />
                     </Form.Group>
                  </div>
                  <div>
                     <Form.Group className='mb-3' controlId='formFileEn'>
                        <Form.Label>Image Eng</Form.Label>
                        <Form.Control onChange={(e) => handleFileMediaUz(e.target.files[0])} name="fileEn" type='file' placeholder='file Uz' />
                     </Form.Group>
                  </div>
               </div>
               <hr />
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
         </div>

      </div>
   )
}

export default CoursesCrud
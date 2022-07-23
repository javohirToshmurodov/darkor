import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CoursesCrud = () => {

   const [nameUz, setNameUz] = useState("")
   const [nameRu, setNameRu] = useState("")
   const [nameEn, setNameEn] = useState("")
   const [descriptonUz, setDescriptionUz] = useState("")
   const [descriptonRu, setDescriptionRu] = useState("")
   const [descriptonEn, setDescriptionEn] = useState("")

   const handleCourseSubmit = (e) => {
      e.preventDefault()
   }
   return (
      <div className='row'>
         <div className="col-md-8 offset-2">

            <Form onSubmit={handleCourseSubmit}>
               <Form.Group className="mb-3" controlId="formBasicnameUz">
                  <Form.Label htmlFor='nameuz'>Name Uz</Form.Label>
                  <Form.Control id='nameuz' type="text" placeholder="Enter NameUz" />
               </Form.Group>
               <Form.Group className='mb-3' controlId='formBasicnameRu'>
                  <Form.Label htmlFor='nameru'>Name RU</Form.Label>
                  <Form.Control id='nameru' type="text" placeholder="Enter NameRu" />
               </Form.Group>
               <Form.Group className='mb-3' controlId='formBasicnameEn'>
                  <Form.Label htmlFor='nameen'>Name Eng</Form.Label>
                  <Form.Control id='nameen' type="text" placeholder="Enter NameEng" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description Uz</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                  <Form.Label>Description Ru</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                  <Form.Label>Description Eng</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>

               <div className='d-flex gap-3'>
                  <div>
                     <Form.Group className='mb-3' controlId='formFileUz'>
                        <Form.Label>Image Uz</Form.Label>
                        <Form.Control type='file' placeholder='file Uz' />
                     </Form.Group>
                  </div>
                  <div>
                     <Form.Group className='mb-3' controlId='formFileRu'>
                        <Form.Label>Image Ru</Form.Label>
                        <Form.Control type='file' placeholder='file Uz' />
                     </Form.Group>
                  </div>
                  <div>
                     <Form.Group className='mb-3' controlId='formFileEn'>
                        <Form.Label>Image Eng</Form.Label>
                        <Form.Control type='file' placeholder='file Uz' />
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
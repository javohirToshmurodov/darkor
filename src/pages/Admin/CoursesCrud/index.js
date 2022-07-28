import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { instance } from '../../../redux/actions';

const CoursesCrud = () => {

   const [titleDescriptionUz, setTitleDescriptionUz] = useState("")
   const [titleDescriptionRu, setTitleDescriptionRu] = useState("")
   const [titleDescriptionEn, setTitleDescriptionEn] = useState("")

   const [secondTitleDescriptionUz, setSecondTitleDescriptionUz] = useState("")
   const [secondTitleDescriptionRu, setSecondTitleDescriptionRu] = useState("")
   const [secondTitleDescriptionEn, setSecondTitleDescriptionEn] = useState("")
   const [descriptionUz, setDescriptionUz] = useState("")
   const [descriptionRu, setDescriptionRu] = useState("")
   const [descriptionEn, setDescriptionEn] = useState("")


   const [secondDescriptionUz, setSecondDescriptionUz] = useState("")
   const [secondDescriptionRu, setSecondDescriptionRu] = useState("")
   const [secondDescriptionEn, setSecondDescriptionEn] = useState("")
   const [imgObject, setImgObject] = useState({})
   const [courseData, setCourseData] = useState({})
   const handleCourseSubmit = (e) => {
      e.preventDefault()
      console.log(titleDescriptionUz, titleDescriptionRu, titleDescriptionEn, descriptionUz, descriptionRu, descriptionEn);
   }
   const handleFileMediaUz = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/MEDIA", formData).then((res) => {
         console.log(res.data);
         setImgObject({ ...res.data })
         alert("File Uz muvaffaqiyatli yuklandi")
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
         <div className="col-md-12">

            <Form onSubmit={handleCourseSubmit}>
               <div className="d-flex gap-5 justify-content-between">
                  <div className='w-50'>
                     <Form.Group className="mb-3" controlId="formBasictitleDescriptionUz">
                        <Form.Label >titleDescription Uz</Form.Label>
                        <Form.Control onChange={(e) => setTitleDescriptionUz(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>
                     <Form.Group className='mb-3' controlId='formBasictitleDescriptionRu'>
                        <Form.Label >titleDescription RU</Form.Label>
                        <Form.Control onChange={(e) => setTitleDescriptionRu(e.target.value)} type="text" placeholder="Enter titleDesription" />
                     </Form.Group>
                     <Form.Group className='mb-3' controlId='formBasicnameEn'>
                        <Form.Label >titleDescription Eng</Form.Label>
                        <Form.Control onChange={(e) => setTitleDescriptionEn(e.target.value)} type="text" placeholder="Enter titledescriptionen" />
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

                     {/* second title descriptionlar */}
                     <Form.Group className="mb-3" controlId="formsecondtitleDescriptionUz">
                        <Form.Label >secondtitleDescription Uz</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleDescriptionUz(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formsecondtitleDescriptionru">
                        <Form.Label >secondtitleDescription Ru</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleDescriptionRu(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formsecondtitleDescriptionen">
                        <Form.Label >secondtitleDescription En</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleDescriptionEn(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                        <Form.Label>secondBodyDescription Uz</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleDescriptionEn(e.target.value)} as="textarea" rows={3} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                        <Form.Label>Description Ru</Form.Label>
                        <Form.Control onChange={(e) => setDescriptionRu(e.target.value)} as="textarea" rows={3} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                        <Form.Label>Description Eng</Form.Label>
                        <Form.Control onChange={(e) => setDescriptionEn(e.target.value)} as="textarea" rows={3} />
                     </Form.Group>

                  </div>
                  <div className='w-50'>

                     <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionUz">
                        <Form.Label >coursename Uz</Form.Label>
                        <Form.Control onChange={(e) => setTitleDescriptionUz(e.target.value)} type="text" placeholder="Enter coursetitleDescriptionUz" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionRu">
                        <Form.Label >coursename Ru</Form.Label>
                        <Form.Control onChange={(e) => setTitleDescriptionRu(e.target.value)} type="text" placeholder="Enter coursetitleDescriptionRu" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCoursenameen">
                        <Form.Label >coursename En</Form.Label>
                        <Form.Control onChange={(e) => console.log(e.target.value)} type="text" placeholder="Enter coursenameen" />
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
                              <Form.Control onChange={(e) => handleFileMediaUz(e.target.files[0])} name="fileRu" type='file' placeholder='file Ru' />
                           </Form.Group>
                        </div>
                        <div>
                           <Form.Group className='mb-3' controlId='formFileEn'>
                              <Form.Label>Image Eng</Form.Label>
                              <Form.Control onChange={(e) => handleFileMediaUz(e.target.files[0])} name="fileEn" type='file' placeholder='file Uz' />
                           </Form.Group>
                        </div>
                     </div>
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
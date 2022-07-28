import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { instance } from '../../../redux/actions';
import InputGroup from 'react-bootstrap/InputGroup';

const CoursesCrud = () => {
   const [coursenameUz, setCourseNameUz] = useState("")
   const [coursenameRu, setCourseNameRu] = useState("")
   const [coursenameEn, setCoursenameEn] = useState("")
   const [titleDescriptionUz, setTitleDescriptionUz] = useState("")
   const [titleDescriptionRu, setTitleDescriptionRu] = useState("")
   const [titleDescriptionEn, setTitleDescriptionEn] = useState("")
   const [descriptionUz, setDescriptionUz] = useState("")
   const [descriptionRu, setDescriptionRu] = useState("")
   const [descriptionEn, setDescriptionEn] = useState("")
   const [secondTitleUz, setSecondTitleUz] = useState("")
   const [secondTitleRu, setSecondTitleRu] = useState("")
   const [secondTitleEn, setSecondTitleEn] = useState("")
   const [secondDescriptionUz, setSecondDescriptionUz] = useState("")
   const [secondDescriptionRu, setSecondDescriptionRu] = useState("")
   const [secondDescriptionEn, setSecondDescriptionEn] = useState("")
   const [imgObject, setImgObject] = useState({})
   const [courseData, setCourseData] = useState({})
   const [price, setPrice] = useState("")
   const [offers, setOffers] = useState([])
   const [offerTitle, setOfferTitle] = useState('')

   const addOffer = () => {
      offers.push({
         offer: ""
      })
      setOffers([...offers])
   }
   const removeOffer = (e, i) => {
      offers.splice(i, 1)
      console.log(i);
      setOffers([...offers])
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
   const handleCourseSubmit = (e) => {
      e.preventDefault()
      console.log(titleDescriptionUz,
         titleDescriptionRu,
         titleDescriptionEn,
         descriptionUz,
         descriptionRu,
         descriptionEn,
         secondTitleUz,
         secondTitleRu,
         secondTitleEn,
         secondDescriptionUz,
         secondDescriptionRu,
         secondDescriptionEn,
         offers
      );
   }
   return (
      <div className='row'>
         <div className="col-md-12">

            <Form onSubmit={handleCourseSubmit}>
               <div className="d-flex gap-5 justify-content-between">
                  <div className='w-50'>
                     <h3>Coursedetail adding here</h3>
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
                        <Form.Label >secondtitle Uz</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleUz(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formsecondtitleDescriptionru">
                        <Form.Label >secondtitle Ru</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleRu(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formsecondtitleDescriptionen">
                        <Form.Label >secondtitle En</Form.Label>
                        <Form.Control onChange={(e) => setSecondTitleEn(e.target.value)} type="text" placeholder="Enter titleDescription" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                        <Form.Label>secondBodyDescription Uz</Form.Label>
                        <Form.Control onChange={(e) => setSecondDescriptionUz(e.target.value)} as="textarea" rows={3} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                        <Form.Label>secondbodyDescription Ru</Form.Label>
                        <Form.Control onChange={(e) => setSecondDescriptionRu(e.target.value)} as="textarea" rows={3} />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                        <Form.Label>secondDescription Eng</Form.Label>
                        <Form.Control onChange={(e) => setSecondDescriptionEn(e.target.value)} as="textarea" rows={3} />
                     </Form.Group>
                     <Form.Group className='mb-3' controlId='formYoutubeLink'>
                        <Form.Label>Youtube Link</Form.Label>
                        <Form.Control onChange={(e) => console.log(e.target.value)} placeholder={"enter the youtube link"} />

                     </Form.Group>
                  </div>
                  <div className='w-50'>
                     <h3>course adding here</h3>
                     <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionUz">
                        <Form.Label >coursename Uz</Form.Label>
                        <Form.Control onChange={(e) => setCourseNameUz(e.target.value)} type="text" placeholder="Enter coursetitleDescriptionUz" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionRu">
                        <Form.Label >coursename Ru</Form.Label>
                        <Form.Control onChange={(e) => setCourseNameRu(e.target.value)} type="text" placeholder="Enter coursetitleDescriptionRu" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCoursenameen">
                        <Form.Label >coursename En</Form.Label>
                        <Form.Control onChange={(e) => setCoursenameEn(e.target.value)} type="text" placeholder="Enter coursenameen" />
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
                     <hr />
                     <div>
                        <h3>Price adding here</h3>
                        <Form.Group className="mb-3" controlId="formbasicprice">
                           <Form.Label >Price</Form.Label>
                           <Form.Control onChange={(e) => setPrice(e.target.value)} max="0" type="number" placeholder="Enter price" />
                        </Form.Group>
                        <h3>Adding offer here</h3>
                        <button onClick={addOffer} className='btn btn-success mb-2'>add offer +</button>
                        {
                           offers.map((e, i) => <Form.Group key={i} controlId={`formBasic${i}`}>
                              <InputGroup className="mb-3">
                                 <Form.Control
                                    onChange={(e) => setOfferTitle(e.target.value)}
                                    placeholder="offer text"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                 />
                                 <InputGroup.Text onClick={(e) => removeOffer(e, i)} className='bg-danger text-white' id={`basic-addon${i}`}>-</InputGroup.Text>
                              </InputGroup>
                           </Form.Group>)
                        }
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
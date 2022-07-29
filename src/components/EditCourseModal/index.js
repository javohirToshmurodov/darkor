import React, { useEffect, useState } from 'react'
import { instance } from '../../redux/actions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { UploadedImg } from '../../styles';

const EditCouresModal = (props) => {
   const { id } = useParams()
   const [courseEdit, setCourseEdit] = useState({})


   const [coursenameUz, setCourseNameUz] = useState("")
   const [coursenameRu, setCourseNameRu] = useState("")
   const [coursenameEn, setCoursenameEn] = useState("")
   const [courseDescriptionUz, setCourseDescriptionUz] = useState("")
   const [courseDescriptionRu, setCourseDescriptionRu] = useState("")
   const [courseDescriptionEn, setCourseDescriptionEn] = useState("")
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
   const [price, setPrice] = useState("")
   const [offersUz, setOffersUz] = useState([])
   const [offersRu, setOffersRu] = useState([])
   const [offersEn, setOffersEn] = useState([])
   const [fileUz, setFileUz] = useState({})
   const [fileRu, setFileRu] = useState({})
   const [fileEn, setFileEn] = useState({})
   const [youtubeLink, setYoutubeLink] = useState("")
   const [courseFileUz, setCourseFileUz] = useState({})
   const [courseFileRu, setCourseFileRu] = useState({})
   const [courseFileEn, setCourseFileEn] = useState({})

   const [loading, setLoading] = useState(false)


   const getCourseDetailEdit = () => {
      setLoading(true)
      instance.put(`/api/v1/courseDetails/for/update/${id}`).then((res) => {
         console.log(res.data.body);
         setCourseEdit({ ...res.data.body })

      }).catch((err) => console.log(err))
      setLoading(false)
   }

   // medialar
   const handleFileMediaUz = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/MEDIA", formData).then((res) => {
         console.log(res.data.body);
         setFileUz({ ...res.data.body })
         alert("File Uz muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }
   const handleFileMediaRu = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/MEDIA", formData).then((res) => {
         console.log(res.data.body);
         setFileRu({ ...res.data.body })
         alert("File Ru muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }

   const handleFileMediaEn = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/MEDIA", formData).then((res) => {
         console.log(res.data.body);
         setFileEn({ ...res.data.body })
         alert("File En muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }




   useEffect(() => {
      getCourseDetailEdit()
      console.log(courseEdit);
      console.log(courseEdit?.course?.nameUz);
   }, [id])
   return (

      <Spin spinning={loading}>
         <Form>

            <div className='row p-2'>
               <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                  <h3>Coursedetail adding here</h3>
                  <Form.Group className="mb-3" controlId="formBasictitleDescriptionUz">
                     <Form.Label >titleDescription Uz</Form.Label>
                     <Form.Control value={courseEdit?.titleDescriptionUz} onChange={(e) => setTitleDescriptionUz(e.target.value)} type="text" required placeholder="Enter titleDescription" />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasictitleDescriptionRu'>
                     <Form.Label >titleDescription RU</Form.Label>
                     <Form.Control value={courseEdit?.titleDescriptionRu} onChange={(e) => setTitleDescriptionRu(e.target.value)} type="text" required placeholder="Enter titleDesription" />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicnameEn'>
                     <Form.Label >titleDescription Eng</Form.Label>
                     <Form.Control value={courseEdit?.titleDescriptionEn} onChange={(e) => setTitleDescriptionEn(e.target.value)} type="text" required placeholder="Enter titledescriptionen" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Description Uz</Form.Label>
                     <Form.Control onChange={(e) => setDescriptionUz(e.target.value)} as="textarea" required rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                     <Form.Label>Description Ru</Form.Label>
                     <Form.Control required onChange={(e) => setDescriptionRu(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                     <Form.Label>Description Eng</Form.Label>
                     <Form.Control required onChange={(e) => setDescriptionEn(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <hr />
                  <h3 className='my-3'>Add media for course detail</h3>
                  <div className='d-flex gap-3 my-4'>
                     <div>
                        <Form.Group className='mb-3' controlId='formFileUz'>
                           <Form.Label>Media Uz</Form.Label>
                           <Form.Control required onChange={(e) => handleFileMediaUz(e.target.files[0])} name="fileUz" type='file' placeholder='file Uz' />
                        </Form.Group>
                        <div>
                           {
                              fileUz.url && <UploadedImg src={fileUz.url} alt="" />
                           }
                        </div>
                     </div>
                     <div>
                        <Form.Group className='mb-3' controlId='formFileRu'>
                           <Form.Label>Media Ru</Form.Label>
                           <Form.Control required onChange={(e) => handleFileMediaRu(e.target.files[0])} name="fileRu" type='file' placeholder='file Ru' />
                        </Form.Group>
                        <div>
                           {
                              fileRu.url && <UploadedImg src={fileRu.url} alt="" />
                           }
                        </div>
                     </div>
                     <div>
                        <Form.Group className='mb-3' controlId='formFileEn'>
                           <Form.Label>Media Eng</Form.Label>
                           <Form.Control required onChange={(e) => handleFileMediaEn(e.target.files[0])} name="fileEn" type='file' placeholder='file Uz' />
                        </Form.Group>
                        <div>
                           {
                              fileEn.url && <UploadedImg src={fileEn.url} alt="" />
                           }
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                  <h3>course edit here</h3>
                  <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionUz">
                     <Form.Label >coursename Uz</Form.Label>
                     <Form.Control value={courseEdit?.course?.nameUz} onChange={(e) => setCourseNameUz(e.target.value)} type="text" placeholder="Enter coursenameUz" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionRu">
                     <Form.Label >coursename Ru</Form.Label>
                     <Form.Control value={courseEdit?.course?.nameRu} onChange={(e) => setCourseNameRu(e.target.value)} type="text" placeholder="Enter coursetitleDescriptionRu" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCoursenameen">
                     <Form.Label >coursename En</Form.Label>
                     <Form.Control value={courseEdit?.course?.nameEn} onChange={(e) => setCoursenameEn(e.target.value)} type="text" placeholder="Enter coursenameen" />
                  </Form.Group>

                  {/* course description here */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaa3">
                     <Form.Label>courseDescription Uz</Form.Label>
                     <Form.Control value={courseEdit?.course?.descriptionUz} onChange={(e) => setCourseDescriptionUz(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ContsrolTextareaa3">
                     <Form.Label>courseDescription Ru</Form.Label>
                     <Form.Control value={courseEdit?.course?.descriptionRu} onChange={(e) => setCourseDescriptionRu(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ConstsrolTextareaa3">
                     <Form.Label>courseDescription En</Form.Label>
                     <Form.Control value={courseEdit?.course?.descriptionEn} onChange={(e) => setCourseDescriptionEn(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
               </div>


            </div>
         </Form>
      </Spin>
   )
}

export default EditCouresModal
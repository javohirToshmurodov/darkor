import React, { useEffect, useState } from 'react'
import { instance } from '../../redux/actions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { UploadedImg } from '../../styles';
import InputGroup from 'react-bootstrap/InputGroup';

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

   const inputTitleUz = (i, e) => {
      offersUz.offer = e.target.value
      setOffersUz([...offersUz])
   }

   const inputTitleRu = (i, e) => {

      offersRu[i].offer = e.target.value
      setOffersUz([...offersRu])
   }
   const inputTitleEn = (i, e) => {

      offersEn[i].offer = e.target.value
      setOffersUz([...offersEn])
   }

   const addOffer = (e) => {
      e.preventDefault()
      courseEdit?.price?.offersUz.push({
         offer: ""
      })
      setOffersUz([...offersUz])
   }
   const addOfferRu = (e) => {
      e.preventDefault()
      offersRu.push({
         offer: ""
      })
      setOffersRu([...offersRu])
   }
   const addOfferEn = (e) => {
      e.preventDefault()
      offersEn.push({
         offer: ""
      })
      setOffersEn([...offersEn])
   }

   const removeOffer = (e, i) => {
      offersUz.splice(i, 1)
      console.log(i);
      setOffersUz([...offersUz])
   }
   const removeOfferRu = (e, i) => {
      offersRu.splice(i, 1)
      console.log(i);
      setOffersRu([...offersRu])
   }
   const removeOfferEn = (e, i) => {
      offersEn.splice(i, 1)
      console.log(i);
      setOffersEn([...offersEn])
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
   const courseHandleFileUz = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/PROFILE", formData).then((res) => {
         console.log(res.data.body);
         setCourseFileUz({ ...res.data.body })
         alert("coursefile uz muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }
   const courseHandleFileRu = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/PROFILE", formData).then((res) => {
         console.log(res.data.body);
         setCourseFileRu({ ...res.data.body })
         alert("coursefile ru muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }
   const courseHandleFileEn = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/PROFILE", formData).then((res) => {
         console.log(res.data.body);
         setCourseFileEn({ ...res.data.body })
         alert("coursefile ru muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }


   const submitCourses = (e) => {
      e.preventDefault()
      instance.post("/api/v1/courseDetails/update/", {
         titleDescriptionUz: `${titleDescriptionUz}`,
         titleDescriptionRu: `${titleDescriptionRu}`,
         titleDescriptionEn: `${titleDescriptionEn}`,
         bodyDescriptionUz: `${descriptionUz}`,
         bodyDescriptionRu: `${descriptionRu}`,
         bodyDescriptionEn: `${descriptionEn}`,
         secondTitleDescriptionUz: `${secondTitleUz}`,
         secondTitleDescriptionRu: `${secondTitleRu}`,
         secondTitleDescriptionEn: `${secondTitleEn}`,
         secondBodyDescriptionUz: `${secondDescriptionUz}`,
         secondBodyDescriptionRu: `${secondDescriptionRu}`,
         secondBodyDescriptionEn: `${secondDescriptionEn}`,
         youtubeVideo: `${youtubeLink}`,
         fileUz: [
            { ...fileUz }
         ],
         fileRu: [
            { ...fileRu }
         ],
         fileEn: [
            { ...fileEn }
         ],
         price: {
            price: `${price}`,
            offersUz: [`${offersUz}`],
            offersRu: [`${offersRu}`],
            offersEn: [`${offersEn}`],
         },
         course: {
            nameUz: `${coursenameUz}`,
            nameRu: `${coursenameRu}`,
            nameEn: `${coursenameEn}`,
            descriptionUz: `${courseDescriptionUz}`,
            descriptionRu: `${courseDescriptionRu}`,
            descriptionEn: `${courseDescriptionEn}`,
            imageUz: [
               { ...courseFileUz }
            ],
            imageRu: [
               { ...courseFileRu }
            ],
            imageEn: [
               { ...courseFileEn }
            ],
         }
      }).then((res) => {
         console.log(res.data);
         alert(
            "qoyil bratan addushi - kurs saqlandi - yorvordiz"
         )
      }).catch((err) => console.log(err))
   }

   useEffect(() => {
      getCourseDetailEdit()
      console.log(courseEdit);
      console.log(courseEdit?.course?.nameUz);
   }, [id])

   return (

      <Spin spinning={loading}>
         <Form onSubmit={submitCourses}>

            <div className='row p-2'>
               <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                  <h3>Coursedetail adding here</h3>
                  <Form.Group className="mb-3" controlId="formBasictitleDescriptionUz">
                     <Form.Label >titleDescription Uz</Form.Label>
                     <Form.Control defaultValue={courseEdit?.titleDescriptionUz} onChange={(e) => setTitleDescriptionUz(e.target.value)} type="text" required placeholder="Enter titleDescription" />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasictitleDescriptionRu'>
                     <Form.Label >titleDescription RU</Form.Label>
                     <Form.Control defaultValue={courseEdit?.titleDescriptionRu} onChange={(e) => setTitleDescriptionRu(e.target.value)} type="text" required placeholder="Enter titleDesription" />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicnameEn'>
                     <Form.Label >titleDescription Eng</Form.Label>
                     <Form.Control defaultValue={courseEdit?.titleDescriptionEn} onChange={(e) => setTitleDescriptionEn(e.target.value)} type="text" required placeholder="Enter titledescriptionen" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Description Uz</Form.Label>
                     <Form.Control defaultValue={courseEdit?.bodyDescriptionUz} onChange={(e) => setDescriptionUz(e.target.value)} as="textarea" required rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                     <Form.Label>Description Ru</Form.Label>
                     <Form.Control defaultValue={courseEdit?.bodyDescriptionRu} required onChange={(e) => setDescriptionRu(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                     <Form.Label>Description Eng</Form.Label>
                     <Form.Control defaultValue={courseEdit?.bodyDescriptionEn} required onChange={(e) => setDescriptionEn(e.target.value)} as="textarea" rows={3} />
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
                  <Form.Group className='mb-3' controlId='formYoutubeLink'>
                     <Form.Label>Youtube Link</Form.Label>
                     <Form.Control defaultValue={courseEdit?.youtubeVideo} onChange={(e) => setYoutubeLink(e.target.value)} placeholder={"enter the youtube link"} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formsecondtfitleDescriptionUz">
                     <Form.Label >secondtitle Uz</Form.Label>
                     <Form.Control defaultValue={courseEdit?.secondTitleDescriptionUz} onChange={(e) => setSecondTitleUz(e.target.value)} type="text" placeholder="Enter titleDescription" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formsecondtiftleDescriptionru">
                     <Form.Label >secondtitle Ru</Form.Label>
                     <Form.Control defaultValue={courseEdit?.secondTitleDescriptionRu} onChange={(e) => setSecondTitleRu(e.target.value)} type="text" placeholder="Enter titleDescription" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formsecondtitlfeDescriptionen">
                     <Form.Label >secondtitle En</Form.Label>
                     <Form.Control defaultValue={courseEdit?.secondTitleDescriptionEn} onChange={(e) => setSecondTitleEn(e.target.value)} type="text" placeholder="Enter titleDescription" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.CfontrolTextarea12">
                     <Form.Label>secondBodyDescription Uz</Form.Label>
                     <Form.Control defaultValue={courseEdit?.secondBodyDescriptionUz} onChange={(e) => setSecondDescriptionUz(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlfTextarea2">
                     <Form.Label>secondbodyDescription Ru</Form.Label>
                     <Form.Control defaultValue={courseEdit?.secondBodyDescriptionRu} onChange={(e) => setSecondDescriptionRu(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                     <Form.Label>secondDescription Eng</Form.Label>
                     <Form.Control defaultValue={courseEdit?.secondBodyDescriptionEn} onChange={(e) => setSecondDescriptionEn(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
               </div>
               <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                  <h3>course edit here</h3>
                  <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionUz">
                     <Form.Label >coursename Uz</Form.Label>
                     <Form.Control defaultValue={courseEdit?.course?.nameUz} onChange={(e) => setCourseNameUz(e.target.value)} type="text" placeholder="Enter coursenameUz" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCoursetitleDescriptionRu">
                     <Form.Label >coursename Ru</Form.Label>
                     <Form.Control defaultValue={courseEdit?.course?.nameRu} onChange={(e) => setCourseNameRu(e.target.value)} type="text" placeholder="Enter coursetitleDescriptionRu" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCoursenameen">
                     <Form.Label >coursename En</Form.Label>
                     <Form.Control defaultValue={courseEdit?.course?.nameEn} onChange={(e) => setCoursenameEn(e.target.value)} type="text" placeholder="Enter coursenameen" />
                  </Form.Group>

                  {/* /second description here */}





                  {/* course description here */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaa3">
                     <Form.Label>courseDescription Uz</Form.Label>
                     <Form.Control defaultValue={courseEdit?.course?.descriptionUz} onChange={(e) => setCourseDescriptionUz(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ContsrolTextareaa3">
                     <Form.Label>courseDescription Ru</Form.Label>
                     <Form.Control defaultValue={courseEdit?.course?.descriptionRu} onChange={(e) => setCourseDescriptionRu(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ConstsrolTextareaa3">
                     <Form.Label>courseDescription En</Form.Label>
                     <Form.Control defaultValue={courseEdit?.course?.descriptionEn} onChange={(e) => setCourseDescriptionEn(e.target.value)} as="textarea" rows={3} />
                  </Form.Group>

                  {/* course file updating */}
                  <h3>Course file upload here</h3>
                  <div className='d-flex gap-3 my-4'>
                     <div>
                        <Form.Group className='mb-3' controlId='fcourormFileUz'>
                           <Form.Label>Course File Uz</Form.Label>
                           <Form.Control onChange={(e) => courseHandleFileUz(e.target.files[0])} name="fileUz" type='file' placeholder='file Uz' />
                        </Form.Group>
                        <div>
                           {
                              courseFileUz?.url && <UploadedImg src={courseFileUz?.url} alt="" />
                           }
                        </div>
                     </div>
                     <div>
                        <Form.Group className='mb-3' controlId='forfsdmFileRu'>
                           <Form.Label>Course File Ru</Form.Label>
                           <Form.Control onChange={(e) => courseHandleFileRu(e.target.files[0])} name="fileRu" type='file' placeholder='file Ru' />
                        </Form.Group>
                        <div>
                           {
                              courseFileRu?.url && <UploadedImg src={courseFileRu?.url} alt="" />
                           }
                        </div>
                     </div>
                     <div>
                        <Form.Group className='mb-3' controlId='forfsdmFileEn'>
                           <Form.Label>Course File Eng</Form.Label>
                           <Form.Control onChange={(e) => courseHandleFileEn(e.target.files[0])} name="fileEn" type='file' placeholder='file Uz' />
                        </Form.Group>
                        <div>
                           {
                              courseFileEn?.url && <UploadedImg src={courseFileEn?.url} alt="" />
                           }
                        </div>
                     </div>

                  </div>
                  <div>
                     <h3>Price adding here</h3>
                     <Form.Group className="mb-3" controlId="formbasicprice">
                        <Form.Label >Price</Form.Label>
                        <Form.Control defaultValue={courseEdit?.price?.price} onChange={(e) => setPrice(e.target.value)} min="0" type="number" placeholder="Enter price" />
                        <div className='mt-3'>
                           <button onClick={addOffer} className='btn btn-success mb-2'>add offerUz +</button>
                           {
                              courseEdit?.price?.offersUz.map((e, i) => <Form.Group key={i} controlId={`formBasssic${i}`}>
                                 <InputGroup className="mb-3">
                                    <Form.Control
                                       onChange={(e) => inputTitleUz(i, e)}
                                       placeholder="offer text Uz"
                                       aria-label="Usernamdse"
                                       aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text onClick={(e) => removeOffer(e, i)} className='bg-danger text-white' id={`basic-addon${i}`}>-</InputGroup.Text>
                                 </InputGroup>
                              </Form.Group>)
                           }
                        </div>
                        <div className='mt-3'>
                           <button onClick={addOfferRu} className='btn btn-success mb-2'>add offerRu +</button>
                           {
                              offersRu.map((e, i) => <Form.Group key={i} controlId={`formBasssic${i}`}>
                                 <InputGroup className="mb-3">
                                    <Form.Control
                                       onChange={(e) => inputTitleRu(i, e)}
                                       placeholder="offer text Uz"
                                       aria-label="Usernamdse"
                                       aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text onClick={(e) => removeOfferRu(e, i)} className='bg-danger text-white' id={`basic-addon${i}`}>-</InputGroup.Text>
                                 </InputGroup>
                              </Form.Group>)
                           }
                        </div>
                        <div className='mt-3'>
                           <button onClick={addOfferEn} className='btn btn-success mb-2'>add offeren +</button>
                           {
                              offersEn.map((e, i) => <Form.Group key={i} controlId={`formBasssic${i}`}>
                                 <InputGroup className="mb-3">
                                    <Form.Control
                                       onChange={(e) => inputTitleEn(i, e)}
                                       placeholder="offer text En"
                                       aria-label="Usernamdse"
                                       aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text onClick={(e) => removeOfferEn(e, i)} className='bg-danger text-white' id={`basic-addon${i}`}>-</InputGroup.Text>
                                 </InputGroup>
                              </Form.Group>)
                           }
                        </div>
                     </Form.Group>
                  </div>
                  <Button type='submit'>
                     save
                  </Button>
               </div>
            </div>
         </Form>
      </Spin>
   )
}

export default EditCouresModal
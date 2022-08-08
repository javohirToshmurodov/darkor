import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { instance } from '../../redux/actions';
import { UploadedImg } from '../../styles';
// import { MultiSelect } from "react-multi-select-component";
import Toast from '../Toast';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
const HandleForm = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [userDescription, setUserDescription] = useState("")
   const [youtubeVideo, setYoutubeVideo] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")
   const [file, setFile] = useState({})
   const [certificate, setCertificate] = useState({})
   const [fullName, setFullName] = useState("")
   const [userFile, setUserFile] = useState({})
   const [loading, setLoading] = useState(false)
   const [courses, setCourses] = useState([])
   const [course, setCourse] = useState("")
   const [selected, setSelected] = useState([])
   const [success, setSuccess] = useState(false)
   const getCourses = () => {
      setLoading(true);
      instance
         .get("api/v1/course/list/?size=10&page=0")
         .then((res) => {
            setCourses([...res.data.body]);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
         })

   };
   const handleFileMedia = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/MEDIA", formData).then((res) => {
         console.log(res.data.body);
         setFile({ ...res.data.body })
         alert("Media muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }
   const handleFileMediaProfile = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/PROFILE", formData).then((res) => {
         console.log(res.data.body);
         setUserFile({ ...res.data.body })
         alert("Rasm muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })
   }
   const handleFileMediaCertificate = (e) => {
      console.log(e);
      const formData = new FormData()
      formData.append("file", e)

      instance.post("/upload/CERTIFICATE", formData).then((res) => {
         console.log(res.data.body);
         setCertificate({ ...res.data.body })
         alert("Sertifikat muvaffaqiyatli yuklandi")
      }).catch((err) => {
         console.log(err);
      })


   }

   const option = () => {
      return courses.map((e, i) => (
         {
            value: e.id,
            label: e.name
         }
      ))
   }
   const handleChange = (e) => {
      // console.log(e);
      const arr = []
      e.map((e, i) => {
         arr.push(e.value)
         setSelected(arr)
      })
      console.log(arr);
   }
   const handleCrop = (e) => {
      const word = e.substring(17)
      setYoutubeVideo(word)

      console.log(youtubeVideo);
   }
   useEffect(() => {
      // console.log();
      getCourses()
   }, [])
   const handleSubmit = (e) => {
      e.preventDefault()

      instance.post("/api/v1/user-employee/create-with-detail/", {
         title: `${title}`,
         description: `${description}`,
         userDescription: `${userDescription}`,
         youTubeVideo: `${youtubeVideo}`,
         phoneNumber: `${phoneNumber}`,
         gallery: [
            { ...file },
            { ...certificate }
         ],
         userEmployee: {
            fullName: `${fullName}`,
            gallery: {
               ...userFile
            },
            courseIds: [
               ...selected
            ]
         }
      }).then((res) => {
         console.log(res.data);
         setSuccess(true)
         alert("24 soat ichida ma'lumotlaringiz Admin tomonidan ko'rib chiqiladi ")
         setTitle("")
         setDescription("")
         setUserDescription("")
         setYoutubeVideo("")
         setPhoneNumber("")
         setFile({})
         setCertificate("")
         setFullName("")
         setUserFile({})
         setSelected([])
      }).catch((err) => {
         console.log(err);
         setSuccess(false)
      })
      navigate("/")
   }
   return (
      <Spin spinning={loading}>

         <div className='row justify-content-center'>
            <div className="col-6 shadow bordered rounded p-5">
               <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="title">
                     <Form.Label>Title</Form.Label>
                     <Form.Control onChange={(e) => setTitle(e.target.value)} required type="text" placeholder="....." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="description">
                     <Form.Label>Description here</Form.Label>
                     <Form.Control onChange={(e) => setDescription(e.target.value)} required as={"textarea"} type="text" placeholder="......" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="description">
                     <Form.Label>UserDescription here</Form.Label>
                     <Form.Control onChange={(e) => setUserDescription(e.target.value)} required as={"textarea"} type="text" placeholder="....." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="youtube">
                     <Form.Label>You Tube video</Form.Label>
                     <Form.Control onChange={(e) => handleCrop(e.target.value)} required type="text" placeholder="....." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="something">
                     <Form.Label>{t("phone")} </Form.Label>
                     <Form.Control required onChange={(e) => setPhoneNumber(e.target.value)} type="tel" name="phone" maxLength={"13"} placeholder="+998 _ _ _ _ _ _ _ _" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="file">
                     <Form.Label>Upload media</Form.Label>
                     <Form.Control onChange={(e) => handleFileMedia(e.target.files[0])} required type="file" placeholder="ds" />
                  </Form.Group>
                  <div>
                     {
                        file?.url && <UploadedImg src={file?.url} alt='no image' />
                     }
                  </div>
                  <Form.Group className="mb-3" controlId="certificate">
                     <Form.Label>Upload certificate</Form.Label>
                     <Form.Control onChange={(e) => handleFileMediaCertificate(e.target.files[0])} required type="file" placeholder="ds" />
                  </Form.Group>
                  <div>
                     {
                        certificate?.url && <UploadedImg src={certificate?.url} alt='no image' />
                     }
                  </div>
                  <h4 className="text-center">UserEmployee</h4>
                  <Form.Group className="mb-3" controlId="fullname">
                     <Form.Label>Full Name</Form.Label>
                     <Form.Control onChange={(e) => setFullName(e.target.value)} required type="text" placeholder="....." />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='course'>
                     <Form.Label>Select course</Form.Label>
                     <Select
                        isMulti
                        name="colors"
                        options={option()}
                        onChange={(e) => handleChange(e)}
                        className="basic-multi-select"
                        classNamePrefix="select" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fileUser">
                     <Form.Label>Upload an image for avatar</Form.Label>
                     <Form.Control onChange={(e) => handleFileMediaProfile(e.target.files[0])} required type="file" placeholder="" />
                  </Form.Group>
                  <div>
                     {
                        userFile?.url && <UploadedImg src={userFile?.url} alt='no image' />
                     }
                  </div>

                  <div className="text-end">
                     <Button variant="primary" type="submit">
                        {t("submit")}
                     </Button>
                  </div>
               </Form>
            </div>
            {
               // success ? <Toast /> : ""
            }
         </div>
      </Spin>
   )
}

export default HandleForm
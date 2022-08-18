import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { instance } from "../../../redux/actions";
import { UploadedImg } from "../../../styles";
// import { MultiSelect } from "react-multi-select-component";
import Toast from "../../../components/Toast";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const HandleForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [descriptionUz, setDescriptionUz] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [userDescriptionUz, setUserDescriptionUz] = useState("");
  const [userDescriptionRu, setUserDescriptionRu] = useState("");
  const [userDescriptionEn, setUserDescriptionEn] = useState("");
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [file, setFile] = useState({});
  const [certificate, setCertificate] = useState({});
  const [fullNameUz, setFullNameUz] = useState("");
  const [fullNameRu, setFullNameRu] = useState("");
  const [fullNameEn, setFullNameEn] = useState("");
  const [userFile, setUserFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [selected, setSelected] = useState({});
  const [success, setSuccess] = useState(false);
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
      });
  };


  const handleFileMedia = (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("file", e);

    instance
      .post("/upload/MEDIA", formData)
      .then((res) => {
        console.log(res.data.body);
        setFile({ ...res.data.body });
        alert("Media muvaffaqiyatli yuklandi");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFileMediaProfile = (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("file", e);

    instance
      .post("/upload/PROFILE", formData)
      .then((res) => {
        console.log(res.data.body);
        setUserFile({ ...res.data.body });
        alert("Rasm muvaffaqiyatli yuklandi");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFileMediaCertificate = (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("file", e);

    instance
      .post("/upload/CERTIFICATE", formData)
      .then((res) => {
        console.log(res.data.body);
        setCertificate({ ...res.data.body });
        alert("Sertifikat muvaffaqiyatli yuklandi");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
   getCourses();
     }, []);
  const option = () => {
    return courses.map((e, i) => ({
      value: e,
      label: e.name,
    }));
  };

  const select = (id) => {
       const res = courses.filter((item) => {
         return item.id == id;
       });
      
       setSelected(res)
      }

  const handleChange = (e) => {
    const arr = [];
    e.map((e, i) => {
      arr.push({ ...e.value });
      setSelected(arr);
    });
  };
  
  console.log();
  
  const handleCrop = (e) => {
    const word = e.substring(17);
    setYoutubeVideo(word);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullNameUz: `${fullNameUz}`,
        fullNameRu: `${fullNameRu}`,
        fullNameEn: `${fullNameEn}`,
        type: "EXPERT",
        courses: [...selected],
        youTubeVideo: `${youtubeVideo}`,
        titleDescriptionUz: `${descriptionUz}`,
        titleDescriptionRu: `${descriptionRu}`,
        titleDescriptionEn: `${descriptionEn}`,
        bodyDescriptionUz: `${userDescriptionUz}`,
        bodyDescriptionRu: `${userDescriptionRu}`,
        bodyDescriptionEn: `${userDescriptionEn}`,
        galleries: [{ ...file }, { ...certificate }, { ...userFile }]
    });
    instance
      .post("/api/v1/employee/create_with_detail/", {
        fullNameUz: `${fullNameUz}`,
        fullNameRu: `${fullNameRu}`,
        fullNameEn: `${fullNameEn}`,
        type: "EXPERT",
        courses: [selected],
        youTubeVideo: `${youtubeVideo}`,
        titleDescriptionUz: `${descriptionUz}`,
        titleDescriptionRu: `${descriptionRu}`,
        titleDescriptionEn: `${descriptionEn}`,
        bodyDescriptionUz: `${userDescriptionUz}`,
        bodyDescriptionRu: `${userDescriptionRu}`,
        bodyDescriptionEn: `${userDescriptionEn}`,
        galleries: [{ ...file }, { ...certificate }, { ...userFile }],
      })
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        alert(
          "24 soat ichida ma'lumotlaringiz Admin tomonidan ko'rib chiqiladi "
        );
        setTitle("");
        setDescriptionUz("");
        setUserDescriptionUz("");
        setYoutubeVideo("");
        setFile({});
        setCertificate("");
        setFullNameUz("");
        setUserFile({});
        setSelected([]);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
      });
  };
  return (
    <Spin spinning={loading}>
      <div className="row justify-content-center">
        <div className="col-6 shadow bordered rounded p-5">
          <h4 className="text-center">Ushbu formani to'ldiring</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Familiya, ism, sharifingiz (UZ)</Form.Label>
              <Form.Control
                onChange={(e) => setFullNameUz(e.target.value)}
                required
                type="text"
                placeholder="....."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Familiya, ism, sharifingiz (RU)</Form.Label>
              <Form.Control
                onChange={(e) => setFullNameRu(e.target.value)}
                required
                type="text"
                placeholder="....."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Familiya, ism, sharifingiz(EN)</Form.Label>
              <Form.Control
                onChange={(e) => setFullNameEn(e.target.value)}
                required
                type="text"
                placeholder="....."
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="course">
              <Form.Label>Qaysi sohalarda bilim olgansiz!</Form.Label>
              <Select
                isMulti
                name="colors"
                options={option()}
                onChange={(e) => handleChange(e)}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Form.Group> */}
            <label htmlFor="selectCourse">Select Course </label>
            
            <select
              name="course"
              id="selectCourse"
              onChange={(e) => select(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Kursni tanlang</option>
              {courses?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <br/>
            <Form.Group className="mb-3" controlId="fileUser">
              <Form.Label>Shaxsiy suratingizning yuklang!</Form.Label>
              <Form.Control
                onChange={(e) => handleFileMediaProfile(e.target.files[0])}
                required
                type="file"
                placeholder=""
              />
            </Form.Group>
            <div>
              {userFile?.url && (
                <UploadedImg src={userFile?.url} alt="no image" />
              )}
            </div>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Title description (UZ)</Form.Label>
              <Form.Control
                onChange={(e) => setDescriptionUz(e.target.value)}
                required
                as={"textarea"}
                type="text"
                placeholder="......"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Title description (RU)</Form.Label>
              <Form.Control
                onChange={(e) => setDescriptionRu(e.target.value)}
                required
                as={"textarea"}
                type="text"
                placeholder="......"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Title description (EN)</Form.Label>
              <Form.Control
                onChange={(e) => setDescriptionEn(e.target.value)}
                required
                as={"textarea"}
                type="text"
                placeholder="......"
              />
            </Form.Group>
            {/* body description */}
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Body description (UZ)</Form.Label>
              <Form.Control
                onChange={(e) => setUserDescriptionUz(e.target.value)}
                required
                as={"textarea"}
                type="text"
                placeholder="......"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Body description (RU)</Form.Label>
              <Form.Control
                onChange={(e) => setUserDescriptionRu(e.target.value)}
                required
                as={"textarea"}
                type="text"
                placeholder="......"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Body description (EN)</Form.Label>
              <Form.Control
                onChange={(e) => setUserDescriptionEn(e.target.value)}
                required
                as={"textarea"}
                type="text"
                placeholder="......"
              />
            </Form.Group>
            {/* body description end */}
            <Form.Group className="mb-3" controlId="youtube">
              <Form.Label>YouTube'dagi vlogingiz (mavjud bo'lsa)</Form.Label>
              <Form.Control
                onChange={(e) => handleCrop(e.target.value)}
                type="text"
                placeholder="....."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="file">
              <Form.Label>
                Qilgan ishlaringiz bo'yicha media yuklang!
              </Form.Label>
              <Form.Control
                onChange={(e) => handleFileMedia(e.target.files[0])}
                required
                type="file"
                placeholder="ds"
              />
            </Form.Group>
            <div>
              {file?.url && <UploadedImg src={file?.url} alt="no image" />}
            </div>
            <Form.Group className="mb-3" controlId="certificate">
              <Form.Label>Sertifikatingizni yuklang!</Form.Label>
              <Form.Control
                onChange={(e) => handleFileMediaCertificate(e.target.files[0])}
                type="file"
                placeholder="ds"
              />
            </Form.Group>
            <div>
              {certificate?.url && (
                <UploadedImg src={certificate?.url} alt="no image" />
              )}
            </div>
            {/* <h4 className="text-center">UserEmployee</h4> */}
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
  );
};

export default HandleForm;

// import { Form } from "antd";
// import { Button } from "bootstrap";
// import React, { useEffect, useState } from "react";
// import { instance } from "../../../redux/actions";

// const CreateEmployee = () => {
//   const [courses, setCourses] = useState([]);

//   const [data, setData] = useState({
//     fullNameUz: "",
//     fullNameRu: "",
//     fullNameEn: "",
//     titleDescriptionUz: "",
//     titleDescriptionRu: "",
//     titleDescriptionEn: "",
//     bodyDescriptionUz: "",
//     bodyDescriptionRu: "",
//     bodyDescriptionEn: "",
//     youTubeVideo: "",
//     type: "",
//     galleries: [],
//     courses: "",
//   });

//   const getCourses = async () => {
//     try {
//       const res = await instance.get("/api/v1/course/list/?size=10&page=0");
//       console.log("data", res.data);
//       setCourses(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);
//   const select = (id) => {
//     const res = courses.body.filter((item) => {
//       return item.id == id;
//     });

//     data.courses = [...res];
//     setData({ ...data });
//   };

//   const handleDate = (e) => {
//     const { value, name } = e.target;
//     data[name] = value;
//     setData({ ...data });
//   };

//   const file = async (e) => {
//     try {
//       const file = new FormData();
//       file.append("file", e.target.files[0]);
//       const res = await instance.post("/upload/PROFILE", file);
//       console.log(res);
//       data.galleries.push(res.data.body)
//       setData({ ...data });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const submit = async (e) => {
//     console.log(data)

//     e.preventDefault();
//     instance.post("/api/v1/employee/create_with_detail", data).then((res) => {
//       console.log("1", res.data.body)
//       alert(
//         "Malumot yuklandi"
//       )
//     }).catch((err) => console.log(err, 'ererere'))
//   };
//   return (
//     <form onSubmit={submit}>
//       <div className="row">
//         <div className="px-5 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
//           {/*  FULL NAME */}
//           <div className="form-group">
//             <label htmlFor="name_uz">Full NameUz</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name_uz"
//               aria-describedby="emailHelp"
//               placeholder="Name"
//               onChange={(e) => handleDate(e)}
//               name="fullNameUz"
//               value={data.fullNameUz}
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label htmlFor="fullNameRu">Full Name Ru</label>
//             <input
//               type="text"
//               className="form-control"
//               id="fullNameRu"
//               aria-describedby="emailHelp"
//               placeholder="Name"
//               onChange={(e) => handleDate(e)}
//               name="fullNameRu"
//               value={data.fullNameRu}
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label htmlFor="fullNameEn">Full Name En</label>
//             <input
//               type="text"
//               className="form-control"
//               id="fullNameEn"
//               aria-describedby="emailHelp"
//               placeholder="Name"
//               onChange={(e) => handleDate(e)}
//               name="fullNameEn"
//               value={data.fullNameEn}
//             />
//           </div>
//           <br />

//           {/* TITLE DESCRIPTION*/}

//           <div className="form-group">
//             <label htmlFor="titleDescriptionUz">Title Description Uz</label>
//             <textarea
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               name="titleDescriptionUz"
//               onChange={(e) => handleDate(e)}
//               rows="3"
//               value={data.titleDescriptionUz}

//             ></textarea>
//           </div>
//           <br />

//           <div className="form-group">
//             <label htmlFor="titleDescriptionRu">Title Description Ru</label>
//             <textarea
//               className="form-control"
//               id="titleDescriptionRu"
//               name="titleDescriptionRu"
//               onChange={(e) => handleDate(e)}
//               rows="3"
//               value={data.titleDescriptionRu}

//             ></textarea>
//           </div>
//           <br />

//           <div className="form-group">
//             <label htmlFor="titleDescriptionEn">Title Description En</label>
//             <textarea
//               className="form-control"
//               id="titleDescriptionEn"
//               name="titleDescriptionEn"
//               onChange={(e) => handleDate(e)}
//               rows="3"
//               value={data.titleDescriptionEn}

//             ></textarea>
//           </div>
//           <br />
//           <button type="submit" className="mt-3 btn btn-primary">
//             Submit
//           </button>
//         </div>

//         <div className="px-5 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
//           {/* BODY DESCRIPTION */}
//           <div className="form-group">
//             <label htmlFor="bodyDescriptionUz">Body Description Uz</label>
//             <textarea
//               className="form-control"
//               id="bodyDescriptionUz"
//               name="bodyDescriptionUz"
//               onChange={(e) => handleDate(e)}
//               rows="3"
//               value={data.bodyDescriptionUz}
//             ></textarea>
//           </div>

//           <br />
//           <div className="form-group">
//             <label htmlFor="bodyDescriptionRu">Body Description Ru</label>
//             <textarea
//               className="form-control"
//               id="bodyDescriptionRu"
//               name="bodyDescriptionRu"
//               onChange={(e) => handleDate(e)}
//               rows="3"
//               value={data.bodyDescriptionRu}

//             ></textarea>
//           </div>

//           <br />
//           <div className="form-group">
//             <label htmlFor="bodyDescriptionEn">Body Description En</label>
//             <textarea
//               className="form-control"
//               id="bodyDescriptionEn"
//               name="bodyDescriptionEn"
//               onChange={(e) => handleDate(e)}
//               rows="3"
//               value={data.bodyDescriptionEn}

//             ></textarea>
//           </div>
//           <br />
//           <div className="form-group">
//             <label htmlFor="youTubeVideo">YouTube Video</label>
//             <input
//               type="text"
//               className="form-control"
//               id="youTubeVideo"
//               placeholder="youTubeVideo"
//               onChange={(e) => handleDate(e)}
//               name="youTubeVideo"
//               value={data.youTubeVideo}
//             />
//           </div>
//           {/* SELECT COURSE */}
//           <br />
//           <label htmlFor="selectCourse">Select Course </label>
//           <select
//             name="course"
//             id="selectCourse"
//             onChange={(e) => select(e.target.value)}
//             className="form-control"
//             required
//           >
//             <option value="">Kursni tanlang</option>
//             {courses.body?.map((item) => (
//               <option key={item.id} value={item.id}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//           <br />

//           <label htmlFor="selectType">Select Type </label>
//           <select
//             name="type"
//             id="selectType"
//             className="form-control"
//             required
//             onChange={(e) => handleDate(e)}
//           >
//             <option value="">Type tanlang</option>
//             <option value="STUDENT" name="type">
//               STUDENT
//             </option>
//             <option value="EXPERT" name="type">
//               EXPERT
//             </option>
//           </select>
//           <br />
//           <input type="file" className="form-control" onChange={(e) => file(e)} />
//         </div>
//       </div>

//     </form>
//   );
// };

// export default CreateEmployee;

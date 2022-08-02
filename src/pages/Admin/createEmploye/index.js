import { Form } from "antd";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { instance } from "../../../redux/actions";

const CreateEmployee = () => {
  const [courses, setCourses] = useState([]);

  const [data, setData] = useState({
    fullNameUz: "",
    fullNameRu: "",
    fullNameEn: "",
    titleDescriptionUz: "",
    titleDescriptionRu: "",
    titleDescriptionEn: "",
    bodyDescriptionUz: "",
    bodyDescriptionRu: "",
    bodyDescriptionEn: "",
    youTubeVideo: "",
    type: "",
    galleries: [],
    courses: "",
  });


  const getCourses = async () => {
    try {
      const res = await instance.get("/api/v1/course/list/?size=10&page=0");
      console.log("data", res.data);
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  const select = (id) => {
    const res = courses.body.filter((item) => {
      return item.id == id;
    });

    data.courses = [...res];
    setData({ ...data });
  };

  const handleDate = (e) => {
    const { value, name } = e.target;
    data[name] = value;
    setData({ ...data });
  };

  const file = async (e) => {
    try {
      const file = new FormData();
      file.append("file", e.target.files[0]);
      const res = await instance.post("/upload/PROFILE", file);
      console.log(res);
      data.galleries.push(res.data.body)
      setData({ ...data });
    } catch (err) {
      console.log(err);
    }
  };
  const submit = async (e) => {
    console.log(data)

    e.preventDefault();
    instance.post("/api/v1/employee/create_with_detail", data).then((res) => {
      console.log(res.data)
      alert(
        "Malumot yuklandi"
      )
    }).catch((err) => console.log(err, 'ererere'))
  };
  return (
    <form onSubmit={submit}>
      <div className="row">
        <div className="px-5 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          {/*  FULL NAME */}
          <div className="form-group">
            <label htmlFor="name_uz">Full NameUz</label>
            <input
              type="text"
              className="form-control"
              id="name_uz"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={(e) => handleDate(e)}
              name="fullNameUz"
              value={data.fullNameUz}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="fullNameRu">Full Name Ru</label>
            <input
              type="text"
              className="form-control"
              id="fullNameRu"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={(e) => handleDate(e)}
              name="fullNameRu"
              value={data.fullNameRu}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="fullNameEn">Full Name En</label>
            <input
              type="text"
              className="form-control"
              id="fullNameEn"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={(e) => handleDate(e)}
              name="fullNameEn"
              value={data.fullNameEn}
            />
          </div>
          <br />

          {/* TITLE DESCRIPTION*/}

          <div className="form-group">
            <label htmlFor="titleDescriptionUz">Title Description Uz</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="titleDescriptionUz"
              onChange={(e) => handleDate(e)}
              rows="3"
              value={data.titleDescriptionUz}

            ></textarea>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="titleDescriptionRu">Title Description Ru</label>
            <textarea
              className="form-control"
              id="titleDescriptionRu"
              name="titleDescriptionRu"
              onChange={(e) => handleDate(e)}
              rows="3"
              value={data.titleDescriptionRu}

            ></textarea>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="titleDescriptionEn">Title Description En</label>
            <textarea
              className="form-control"
              id="titleDescriptionEn"
              name="titleDescriptionEn"
              onChange={(e) => handleDate(e)}
              rows="3"
              value={data.titleDescriptionEn}

            ></textarea>
          </div>
          <br />
          <button type="submit" className="mt-3 btn btn-primary">
            Submit
          </button>
        </div>

        <div className="px-5 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          {/* BODY DESCRIPTION */}
          <div className="form-group">
            <label htmlFor="bodyDescriptionUz">Body Description Uz</label>
            <textarea
              className="form-control"
              id="bodyDescriptionUz"
              name="bodyDescriptionUz"
              onChange={(e) => handleDate(e)}
              rows="3"
              value={data.bodyDescriptionUz}
            ></textarea>
          </div>

          <br />
          <div className="form-group">
            <label htmlFor="bodyDescriptionRu">Body Description Ru</label>
            <textarea
              className="form-control"
              id="bodyDescriptionRu"
              name="bodyDescriptionRu"
              onChange={(e) => handleDate(e)}
              rows="3"
              value={data.bodyDescriptionRu}

            ></textarea>
          </div>

          <br />
          <div className="form-group">
            <label htmlFor="bodyDescriptionEn">Body Description En</label>
            <textarea
              className="form-control"
              id="bodyDescriptionEn"
              name="bodyDescriptionEn"
              onChange={(e) => handleDate(e)}
              rows="3"
              value={data.bodyDescriptionEn}

            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="youTubeVideo">YouTube Video</label>
            <input
              type="text"
              className="form-control"
              id="youTubeVideo"
              placeholder="youTubeVideo"
              onChange={(e) => handleDate(e)}
              name="youTubeVideo"
              value={data.youTubeVideo}
            />
          </div>
          {/* SELECT COURSE */}
          <br />
          <label htmlFor="selectCourse">Select Course </label>
          <select
            name="course"
            id="selectCourse"
            onChange={(e) => select(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Kursni tanlang</option>
            {courses.body?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <br />

          <label htmlFor="selectType">Select Type </label>
          <select
            name="type"
            id="selectType"
            className="form-control"
            required
            onChange={(e) => handleDate(e)}
          >
            <option value="">Type tanlang</option>
            <option value="STUDENT" name="type">
              STUDENT
            </option>
            <option value="EXPERT" name="type">
              EXPERT
            </option>
          </select>
          <br />
          <input type="file" className="form-control" onChange={(e) => file(e)} />
        </div>
      </div>

    </form>
  );
};

export default CreateEmployee;

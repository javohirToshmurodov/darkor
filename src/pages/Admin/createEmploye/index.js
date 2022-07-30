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
    type: "",
    gallery: "",
    courses: "",
    gallery: "",
  });

  const getCourses = async () => {
    try {
      const res = await instance.get("api/v1/course/list/?size=10&page=0");
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
    console.log(value,':',name);
    data[name] = value;
    setData({ ...data });
  };

  const file = async (e) => {
    try {
      const file = new FormData();
      file.append("file", e.target.files[0]);
      const res = await instance.post("/upload/MEDIA", file);
      data.gallery = res.data.body;
      setData({ ...data });
    } catch (err) {
      console.log(err);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(data);
    const res = await instance.post("api/v1/employee/create", data);
    console.log(res.data);
  };
  return (
    <div className="row" onSubmit={submit}>
      <form>
        <div className="form-group">
          <label htmlFor="name_uz">fullNameUz</label>
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
          <label htmlFor="fullNameRu">fullNameRu</label>
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
          <label htmlFor="fullNameEn">fullNameEn</label>
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

        <select
          name="course"
          id=""
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

        <select
          name="type"
          id=""
          className="form-control"
          required
          onChange={(e) => handleDate(e)}
        >
          <option value="">Type tanlang</option>
          <option value="STUDENT" name="type">
            STUDENT
          </option>
          <option value="EXPERT" name="type">EXPERT</option>
        </select>
        <br />

        <input type="file" className="form-control" onChange={(e) => file(e)} />
        <button type="submit" className="btn mt-3 btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;

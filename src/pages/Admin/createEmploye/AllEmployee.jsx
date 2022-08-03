import React, { useEffect, useState } from "react";
import { instance } from "../../../redux/actions";
import { Spin } from "antd";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const AllEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState("0");
  const [employeType, setEmployeType] = useState("");

  const getAllService = async () => {
    try {
      setLoading(true);
      const data = await instance.get(
        `/api/v1/employee/list?type=${employeType}&courseId=${selectCourse}&size=20&page=0`
      );
      setAllData([...data.data?.body]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const getCourses = async () => {
    try {
      const res = await instance.get("/api/v1/course/list/?size=10&page=0");
      console.log("data", res.data);
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataAll = () => {
    getAllService();
  };

  useEffect(() => {
    getCourses();
  }, []);

  console.log(allData);

  return (
    <Spin spinning={loading}>
      <div className="row ">
        <div className="col-4 d-flex   align-items-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => setEmployeType("EXPERT")}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              EXPERT
            </label>
          </div>
          <div class="form-check ml-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={() => setEmployeType("STUDENT")}
            />
            <label className="form-check-label" for="flexRadioDefault2">
              STUDENT
            </label>
          </div>
        </div>

        <div className="col-4 d-flex  align-items-center">
          <select
            name="course"
            id="selectCourse"
            onChange={(e) => setSelectCourse(e.target.value)}
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
        </div>

        <div className="col-4 d-flex  align-items-center">
          <button
            onClick={getDataAll}
            type="submit"
            className=" btn btn-primary"
          >
            Submit
          </button>
        </div>

        <div className="col-12 my-4">
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Type</th>
                <th scope="col">Course</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Update qiladgan joy shu mapni ichida */}
              {allData?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.fullName}</td>
                  <td>{item.type}</td>
                  <td>{item.courses[0].name}</td>
                  <td className="d-flex">
                    <BsPencil size="25px" />
                    <AiOutlineDelete
                      size="25px"
                      className="ml-5"
                      onClick={() => console.log("sdsds")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Spin>
  );
};

export default AllEmployee;

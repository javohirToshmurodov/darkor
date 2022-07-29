import React, { useEffect, useState } from "react";
import { instance } from "../../../redux/actions";

const Form = () => {
  const [state, setstate] = useState([]);
  const getData = () => {
    const res = instance
      .get("/api/v1/forum/list?size=10&page=0")
      .then((res) => {
        setstate(res?.data?.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <table className="table">
      <thead className=" bg-dark text-white">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
          <th scope="col">Message</th>
        </tr>
      </thead>
      <tbody>
        {state.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{item.fullName}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Form;

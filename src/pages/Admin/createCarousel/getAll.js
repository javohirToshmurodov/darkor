import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { instance } from "../../../redux/actions";

const GetAll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAll = async () => {
    setLoading(true);
    try {
      const res = await instance.get("/api/v1/carousel/list");
      setData(res.data.body);
    } catch (err) {
      alert(JSON.stringify(err));
    }
    setLoading(false);
  };
  useEffect(() => {
    getAll();
  }, []);

  const deleteItem = async (id) => {
    try {
      await instance.delete("/api/v1/carousel/delete/" + id);
      getAll();
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };
  return (
    <Spin spinning={loading}>
      <div className="container mt-5">
        <ul className="list-group">
          {data.length ? (
            data.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.link}</span>
                <img
                  src={item.gallery.url}
                  alt=""
                  style={{
                    width: "80px",
                    heigth: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  O'chirish
                </button>
              </li>
            ))
          ) : (
            <h1>Menimcha hech narsa yoq</h1>
          )}
        </ul>
      </div>
    </Spin>
  );
};

export default GetAll;

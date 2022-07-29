import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { accesstoken, instance } from "../../../redux/actions";
import axios from "axios";

const StatisticsCrud = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const getData = () => {
   
   
    console.log(data);

    
    const res =  instance.post('/api/v1/statistics/add', data).then((res) => {
        alert("Statistikalar muvaffaqiyatli yuklandi");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    // console.log(data);
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <Form onSubmit={handleSubmit}>
          <div className="d-flex gap-5 justify-content-between">
            <div className="w-50">
              <h3>Statistics adding here </h3>

              {/* Number */}
              <Form.Group className="mb-3" controlId="number">
                <Form.Label>Statistics number</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="number"
                  placeholder="Enter number"
                />
              </Form.Group>

              {/* Title */}
              <Form.Group className="mb-3" controlId="titleUz">
                <Form.Label>titleDescription Uz</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="titleUz"
                  placeholder="Enter titleDescription"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasictitleDescriptionRu"
              >
                <Form.Label>titleDescription RU</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  name="titleRu"
                  type="text"
                  placeholder="Enter titleDesription"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicnameEn">
                <Form.Label>titleDescription Eng</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="titleEn"
                  placeholder="Enter titledescriptionen"
                />
              </Form.Group>

              {/* Description */}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description Uz</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  as="textarea"
                  name="descriptionUz"
                  rows={3}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
              >
                <Form.Label>Description Ru</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  as="textarea"
                  name="descriptionRu"
                  rows={3}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea3"
              >
                <Form.Label>Description Eng</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  as="textarea"
                  name="descriptionEn"
                  rows={3}
                />

                <Form.Select
                  className="mt-3"
                  aria-label="Default select example"
                  name="statisticsType"
                  onChange={(e) => handleChange(e)}
                >
                  <option defaultValue>Bo'limni tanlang</option>
                  <option value="HOME">HOME</option>
                  <option value="SERVICE">SERVICE</option>
                </Form.Select>
              </Form.Group>
              <hr />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default StatisticsCrud;

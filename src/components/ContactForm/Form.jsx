import React, { useState } from "react";
import { instance } from "../../redux/actions";

const MessageForm = () => {

  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const getData = () => {
    const res =  instance.post('/api/v1/forum/create', data).then((res) => {
        alert("Statistikalar muvaffaqiyatli yuklandi");
        console.log(res.data);
      })
      .catch((err) => {
      alert('xatolik')
        console.log(err);
      });
  };


  const handleSubmit = (e) => {
    console.log(data, "sadasdsadasd");
    // e.preventDefault()
    getData();
  };
  return (
    <form onSubmit={handleSubmit} className="d-grid gap-3">
      {/* Name input */}
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Имя</label>
        <input
          onChange={handleChange}
          name="fullName"
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Имя"
        />
      </div>
      {/* Email input */}

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email (по желанию )</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="you@company.com"
        />
      </div>
      {/* phone number input */}

      <label className="form-group col-xs-4 col-md-4">Номер телефона</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            UZ
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div role="separator" className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          placeholder="+998 (99) 897-45-04 "
          className="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>

      {/* text area input */}
      <div className="form-group col-xs-4 ">
        <label className="form-group col-xs-4 col-md-4">Сообщение (по желанию )</label>
        <textarea
          name="message"
          onChange={handleChange}
          className="form-control"
          id="email"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Отправить сообщение
      </button>
    </form>
  );
};

export default MessageForm;

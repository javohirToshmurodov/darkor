import React from "react";

const messageForm = () => {
  return (
    <form className="d-grid gap-3">
      {/* Name input */}
      <div className="form-group">
        <label for="formGroupExampleInput">Имя</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Имя"
        />
      </div>
      {/* Email input */}

      <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
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
          placeholder="+998 (99) 897-45-04 "
          className="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>

      {/* text area input */}
      <div className="form-group col-xs-4 ">
        <label className="form-group col-xs-4 col-md-4">Сообщение</label>
        <textarea className="form-control" id="email"></textarea>
      </div>

      {/* checkbox input */}

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Вы соглашаетесь с нашей дружественной политикой конфиденциальности.
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Отправить сообщение
      </button>
    </form>
  );
};

export default messageForm;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { instance } from "../../../redux/actions";

const Create = () => {
  const [file, setFile] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const [title, setTitle] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const handleFileMedia = (e, name) => {
    const formData = new FormData();
    formData.append("file", e);

    instance
      .post("/upload/MEDIA", formData)
      .then((res) => {
        console.log(file);
        setFile({ ...file, [name]: { ...res.data.body } });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await instance.post("/api/v1/carousel/addCarousel", {
        galleryUz: file.uz,
        galleryRu: file.ru,
        galleryEn: file.en,
        linkUz: title.uz,
        linkRu: title.ru,
        linkEn: title.en,
      });
      window.location.reload();
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFileRu">
        <Form.Label>Media Ru</Form.Label>
        <Form.Control
          required
          onChange={(e) => handleFileMedia(e.target.files[0], "ru")}
          name="fileRu"
          type="file"
          placeholder="file Ru"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFileRu">
        <Form.Label>Media Uz</Form.Label>
        <Form.Control
          required
          onChange={(e) => handleFileMedia(e.target.files[0], "uz")}
          name="fileUz"
          type="file"
          placeholder="file Uz"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFileRu">
        <Form.Label>Media En</Form.Label>
        <Form.Control
          required
          onChange={(e) => handleFileMedia(e.target.files[0], "en")}
          name="fileEn"
          type="file"
          placeholder="file En"
        />
      </Form.Group>
      <Form.Group>
        <input
          className="form-control"
          required
          value={title?.uz}
          type={"text"}
          placeholder="uz"
          name="uz"
          onChange={(e) =>
            setTitle({ ...title, [e.target.name]: e.target.value })
          }
        />
      </Form.Group>
      <input
        className="mt-4 mb-4 form-control"
        type={"text"}
        required
        value={title?.ru}
        placeholder="ru"
        name="ru"
        onChange={(e) =>
          setTitle({ ...title, [e.target.name]: e.target.value })
        }
      />
      <input
        className="form-control"
        type={"text"}
        required
        value={title?.en}
        placeholder="en"
        name="en"
        onChange={(e) =>
          setTitle({ ...title, [e.target.name]: e.target.value })
        }
      />

      <button className="mt-4 btn btn-success" onClick={submit}>
        Junatish
      </button>
    </Form>
  );
};

export default Create;

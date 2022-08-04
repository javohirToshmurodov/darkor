import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselSlider from "../Carousel";
import ContactWithUs from "../ContactWithUs";
import DefaultCard from "../DefaultCardCourses";
import { Collapse } from "antd";
import Footer from "../Footer";
import { instance } from "../../redux/actions";
import { DefaultCardWrapper, StickCardCourseDetailWrapper } from "../../styles";
import DefaultButton from "../DefaultButton";
import iconka from "../../assets/icons/searchIcon.svg";
import DefaultExpertCard from "../DefaultCardExperts";
import { useTranslation } from "react-i18next";
import chevron from "../../assets/icons/upDown.svg";

const Employees = () => {
  const { code } = useParams();
  const [courses, setCourses] = useState([]);
  const [faq, setFaq] = useState([]);
  const [search, setSearch] = useState("");
  const { Panel } = Collapse;
  const [loading, setLoading] = useState(false);
  const getCourses = () => {
    setLoading(true);
    instance
      .get("/api/v1/employee/list?type=STUDENT&size=10&page=1")
      .then((res) => {
        console.log(res.data.body);
        setCourses([...res.data.body]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFaq = () => {
    setLoading(true);
    instance
      .get(`/api/v1/faq/list?size=10&page=0&lang=uz`)
      .then((res) => {
        console.log("Bu result", res.data.body);
        setFaq([...res.data.body]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourses();
    console.log("courses", courses);
    getFaq();
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <Spin spinning={loading}>
      <div className="container ">
        <div className="row">
          <div className="mt-4 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <StickCardCourseDetailWrapper className="mt-5 ml-5 position-sticky ">
              <div className="px-4 py-2">
                {" "}
                <h5 className="mt-3 mb-3">Кадры</h5>
                <hr />
                <div class="input-group">
                  {/* <img
                  style={{
                    padding: "8px",
                    border: "1px solid lightgrey",
                    borderRight: "none",
                  }}
                  src={iconka}
                  alt=""
                /> */}
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Text input with radio button"
                    placeholder="Запишитесь сейчас"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <ul>
                <li className="px-4 py-2 hovertitle">
                  Обзор-Специалист <img src={chevron} alt="up" />
                </li>
                {courses.map((e, i) => (
                  <li className="px-4 py-2 hover">{e.courses[0].name}</li>
                ))}
              </ul>
            </StickCardCourseDetailWrapper>
          </div>
          <div className="mt-4 col-xl-9 col-lg-9 col-m-9 col-sm-12 col-12">
            <div className="">
              <div className="container ">
                {/* <CarouselSlider /> */}
                <div className="mt-5 row align-items-start justify-content-center">
                  {courses.map((e, i) => (
                    <div className="mb-5 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 justify-content-center d-flex ">
                      {e.courses[0].description.includes(search) ? (
                        <DefaultCardWrapper>
                          <img className="img-fluid" src={e.gallery.url} />
                          <div className="pe-5">
                            <h4 className="mt-2">Имя: {e.fullName}</h4>
                            <p className="subtitle">
                              {e.courses[0].description}
                            </p>
                          </div>
                          <div className="line"></div>
                          <DefaultButton title={"Подробнее"} id={e.code} />
                        </DefaultCardWrapper>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 my-5">
        <ContactWithUs />
      </div>
      <div className="container px-5 mt-4">
        <h1>{t("faq")}</h1>
        <Collapse className="mt-4" defaultActiveKey={["1"]}>
          {faq?.map((e, i) => (
            <Panel header={e.question}>
              <p>{e.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </div>

      <div className="pt-5">
        <Footer />
      </div>
    </Spin>
  );
};

export default Employees;

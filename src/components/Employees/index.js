// import React from "react";

// const Employees = () => {
//   return (
//     <div>
//       Eployees Eployees Eployees Eployees Eployees Eployees Eployees Eployees
//       Eployees Eployees
//     </div>
//   );
// };

// export default Employees;

import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselSlider from "../../components/Carousel";
import ContactWithUs from "../../components/ContactWithUs";
import DefaultCard from "../../components/DefaultCardCourses";
import { Collapse } from "antd";
import Footer from "../../components/Footer";
import { instance } from "../../redux/actions";
import { DefaultCardWrapper } from "../../styles";
import DefaultButton from "../DefaultButton";

const Employees = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [faq, setFaq] = useState([]);
  const { Panel } = Collapse;
  const [loading, setLoading] = useState(false);
  const getCourses = () => {
    setLoading(true);
    instance
      .get("api/v1/employee/list/?size=10&page=0")
      .then((res) => {
        console.log(res.data.body);
        setCourses([...res.data.body]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   getCourses();
  //   console.log("courses", courses);
  // }, []);

  const getFaq = () => {
    setLoading(true);
    instance
      .get(`api/v1/faq/list?size=10&page=0&lang=uz`)
      .then((res) => {
        console.log("Bu result", res);
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
  return (
    <Spin spinning={loading}>
      <div className="">
        <div className="container ">
          {/* <CarouselSlider /> */}
          <div className="row mt-5 align-items-start justify-content-center">
            {courses.map((e, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 justify-content-center d-flex mb-5  ">
                <DefaultCardWrapper>
                  <img className="img-fluid" src={e.gallery.url} alt="rasm" />
                  <div className="pe-5">
                    <h4 className="mt-2">Имя: {e.fullName}</h4>
                    <p className="subtitle">{e.courses[0].description}</p>
                  </div>
                  <div className="line"></div>
                  <DefaultButton title={"Подробнее"} id={e.code} />
                </DefaultCardWrapper>
              </div>

              // <DefaultCard
              //   code={e.id}
              //   key={e.id}
              //   img={e.gallery.url}
              //   subtitle={e.description}
              //   title={e.name}
              // />
            ))}
          </div>
        </div>
      </div>
      <div className="container my-5 px-5">
        <ContactWithUs />
      </div>
      <div className="container mt-4">
        <h1>Faq is here</h1>
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

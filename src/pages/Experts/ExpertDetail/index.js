import { useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import CarouselSlider from "../../../components/Carousel";
import { instance } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import Footer from "../../../components/Footer";
import ContactWithUs from "../../../components/ContactWithUs";
import { CheckOutlined } from "@ant-design/icons";
import TitleH1 from "../../../components/TitleH1";

function ExpertDetail(props) {
  const setActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
  const { t, i18n } = useTranslation();
  const { code } = useParams();
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const [ids, setIds] = useState("");
  const [skills, setSkills] = useState([]);
  const [fullSkills, setFullSkills] = useState("");
  const getEmployeeDetails = () => {
    setLoading(true);
    instance
      .get(`/api/v1/employee_detail/get_by_employee/${code}`)
      .then((res) => {
        console.log("2", res.data.body);
        setEmployee({ ...res.data.body });
        setIds(res.data.body.employee.courses[0].id);
        setFullSkills(res.data.body.employee.courses[0].name);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSkills = () => {
    instance
      .get(`/api/v1/skill/get_by_course/${ids}`)
      .then((res) => {
        console.log(res, "asdsad");
        setSkills([...res.data.body]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(fullSkills, "skilllllllll");

  useEffect(() => {
    {
      ids && getSkills();
    }
  }, [ids]);

  useEffect(() => {
    getEmployeeDetails();
  }, [code]);

  console.log(employee, "dsfdsfsd");
  return (
    <Spin spinning={loading}>
      <div className="container divide-y-2 divide-gray-300 ">
        {/* <CarouselSlider /> */}
        <div className="container">
          <p className="text-base font-semibold uppercase">
            {t("descriptionExpert")}
          </p>
          {
            <h1 className="font-bold text-[44px] leading-[56px]">
              {employee?.titleDescription}
            </h1>
          }
          {<p className="text-xl font-normal">{employee?.bodyDescription}</p>}
          <div className="flex items-center gap-10">
            {employee?.galleries?.map((e, i) => (
              <img
                className="img-fluid rounded-3xl w-[345px]"
                key={e.id}
                src={e.url}
              />
            ))}
            <div>
              {employee?.employee?.courses?.map((e, i) => (
                <p key={e.id} className="text-base font-normal">
                  {" "}
                  {t("expert")} {e.name}
                </p>
              ))}
              {
                <h1 className="font-bold text-[32px] leading-10">
                  {employee?.employee?.fullName}
                </h1>
              }
              {employee?.employee?.courses?.map((e, i) => (
                <p key={e.id} className="text-xl font-semibold">
                  {e.description}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* skillls */}
        <div className="pt-5 mt-5">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
            <p>{t("expertSkilName")}</p>
            <h1>
              <span style={{ color: "#0568FD" }}>Навыки специалиста </span>
              Специалист по Профессия {fullSkills}{" "}
            </h1>

            <div className="mt-5">
              {skills.map((e, i) => (
                <div key={i} className="mb-3 ">
                  <div className="d-flex w-100 ">
                    <div>
                      <CheckOutlined
                        className="me-3"
                        style={{ color: "#34C759", fontSize: "24px" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4>{e.name}</h4>
                      <p style={{ color: "#3A3A3C" }} className="m-0">
                        {e.description}
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="py-5 mt-5">
        <ContactWithUs />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </Spin>
  );
}

export default ExpertDetail;

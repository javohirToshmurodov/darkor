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
import DefaultExpertCard from "../../../components/DefaultCardExperts";

function ExpertDetail(props) {
    const { t, i18n } = useTranslation();
    const { code, id } = useParams();
    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(false);
    const [courseDetail, setCourseDetails] = useState({})
    const [experts, setExperts] = useState([])
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
    const getExperts = () => {
        setLoading(true)
        instance.get("/api/v1/employee/list?type=EXPERT&size=10&page=1").then((res) => {
            console.log("1", res.data.body);
            setExperts([...res.data.body])
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getExperts()
    }, [])
    const getCourseDetails = async () => {
        try {
            const res = await instance.get(`/api/v1/courseDetails/get/?id=3`)
            setCourseDetails(res.data.body)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCourseDetails()
    }, [id])
    const getSkills = () => {
        instance
            .get(`/api/v1/skill/get_by_course/${ids}`)
            .then((res) => {
                setSkills([...res.data.body]);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        {
            ids && getSkills();
        }
    }, [ids]);

    useEffect(() => {
        getEmployeeDetails();
    }, [code]);

    return (
        <Spin spinning={loading}>
            <div className="container">
                <CarouselSlider />
                <div className="container mt-5">
                    <p className="text-base font-semibold uppercase">
                        {t("descriptionExpert")}
                    </p>
                    {
                        <h1 className="font-bold text-[44px] leading-[56px]">
                            {employee?.titleDescription}
                        </h1>
                    }
                    {<p className="text-xl font-normal">{employee?.bodyDescription}</p>}
                    <div className="items-center gap-10 md:flex ">
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
                <hr />
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
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-5 mt-5">
                    <p>
                        {t("cetrificate")}
                    </p>
                    <TitleH1 title={t("certificateDarkor")} />
                    <p>
                        {t("certificateDesc")}
                    </p>
                    <div className="row">
                        {
                            courseDetail?.file?.map((e, i) => <div className='' key={i}>
                                {
                                    e.fileType && e.fileType === "CERTIFICATE" ? <img className='img-fluid' src={e.url} /> : ""
                                }
                            </div>)
                        }


                    </div>
                </div>
                <div className="items-center justify-between mt-5 p-7 row bg-hoverBgColor rounded-2xl">
                    <p className="pt-5 text-base font-semibold uppercase">{t("bigExpert")}</p>
                    <p className="font-bold text-[44px] leading-[56px]">{t("youmayalsolike")}</p>
                    {
                        experts.map((e, i) => (
                            < DefaultExpertCard code={e.code} key={e.id} subtitle={e.courses[0].name} img={e.gallery.url} title={e.fullName} />
                        ))
                    }
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

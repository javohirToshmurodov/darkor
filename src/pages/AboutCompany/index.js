import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import icon from "../../assets/icons/chevronForward.svg";
import Media from "../../components/media";
import { instance } from "../../redux/actions";
import ServiseStatistics from "../../components/ServiseStatistics";
import Partnership from "../../components/Partnership";
import HomeServise from "../../components/HomeServise";
import ContactWithUs from "../../components/ContactWithUs";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
const AboutCompany = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMedia = async () => {
    setLoading(true);
    try {
      const res = await instance.get("/api/v1/post/list/SERVICE?size=10&page=0");
      setState(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <Spin spinning={loading}>
      <Header
        link={t("companyLink")}
        title={t("contactTitle")}
        description={t("contactDescription")}
        firstButtonTitle={t("contactHeaderButton")}
        icon={icon}
      />
      <Media data={state} loading={loading} setLoading={setLoading} />
      <ServiseStatistics />
      <HomeServise />
      <div style={{marginTop: '20px'}} className="my-5">
        <Partnership />
      </div>
      <ContactWithUs />
      <div className="container px-5 mb-5 my-5">
        <FAQ />
      </div>
      <section className="my-5">
        <Footer />
      </section>
    </Spin>
  );
};

export default AboutCompany;

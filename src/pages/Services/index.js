import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import Header from "../../components/header";
import { instance } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import Media from "../../components/media";
import Static from "../../components/static";
import { Collapse } from "antd";
import Partnership from "../../components/Partnership";
import Footer from "../../components/Footer";
import HomeService from "../../components/HomeServise";
import ServiceStatic from "../../components/ServiseStatistics";
import TitleH1 from "../../components/TitleH1";
import ContactWithUs from "../../components/ContactWithUs";

const Services = () => {
   const { Panel } = Collapse;
   const [state, setState] = useState([]);
   const [loading, setLoading] = useState(false);
   const [faq, setFaq] = useState([]);
   const getMedia = async () => {
      setLoading(true);
      try {
         const res = await instance.get("api/v1/post/list?size=10&page=0");
         setState(res.data);
         setLoading(false);
      } catch (err) {
         setLoading(false);
      }
   };

   const getFaq = () => {
      setLoading(true);
      instance
         .get(`api/v1/faq/list?size=10&page=0&lang=uz`)
         .then((res) => {
            setFaq([...res.data.body]);
            setLoading(false);
         })
         .catch((err) => console.log(err));
   };

   useEffect(() => {
      getMedia();
      getFaq();
   }, []);

   const { t, i18n } = useTranslation();
   return (
      <Spin spinning={loading}>
         <Header
            link={t("servicesLink")}
            title={t("servicesTitle")}
            description={t("servicesDescription")}
            firstButtonTitle={t("ourservices")}
            secondButtonTitle={t("ourkadr")}
         />

         <Media data={state} loading={loading} setLoading={setLoading} />
         <ServiceStatic />
         <HomeService />
         <Static />
         <div className="mt-4">
            <Partnership />
         </div>

         {/* <div className="container mx-auto mt-4 mb-4 col-12 d-lg-flex justify-content-between align-center">
            <h1>
               <span className="text-primary">Запишитесь на курс</span> или получите
               <br />
               консультацию
            </h1>
            <button className="h-50 btn btn-primary">Связаться с нами</button>
         </div> */}
         <section className="py-5">
            <ContactWithUs />
         </section>

         <div className="container mt-5">
            <div className="row justify-content-center px-4">
               <div className="col-9">
                  <TitleH1 title={t("faq")} />
                  <Collapse className="mt-4" defaultActiveKey={["1"]}>
                     {faq?.map((e, i) => (
                        <Panel header={e.question}>
                           <p>{e.answer}</p>
                        </Panel>
                     ))}
                  </Collapse>
               </div>
            </div>
         </div>

         <div className="mt-4">
            <Footer />
         </div>
      </Spin>
   );
};

export default Services;
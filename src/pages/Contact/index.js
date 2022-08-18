import React, { useState } from "react";
import { Spin } from "antd";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import icon from "../../assets/icons/chevronForward.svg";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import Form from "../../components/ContactForm/Form"
import TitleH1 from "../../components/TitleH1";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading}>
      <Header
        link={t("contactLink")}
        title={t("contactTitle")}
        description={t("contactDescription")}
        firstButtonTitle={t("contactHeaderButton")}
        icon={icon}
      />
      <ContactInfo
        link={t("contactLink")}
        title={t("contactInfoTitle")}
        description={t("contactInfoDescription")} />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-7 col-sm-8 col-10">
            <div className="mb-2">
              <TitleH1 title={t("contactus")} />
              <p style={{ "color": "#667085" }}>
                {t("friendlyTeam")}
              </p>
            </div>
            <div className="mt-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Contact;

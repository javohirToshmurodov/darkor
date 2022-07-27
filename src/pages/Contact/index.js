import React, { useState } from "react";
import { Spin } from "antd";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import icon from "../../assets/icons/chevronForward.svg";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";

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
       description={t("contactInfoDescription")}/>
       <ContactForm/>
    </Spin>
  );
};

export default Contact;

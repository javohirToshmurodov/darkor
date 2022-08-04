import React from "react";
import ContactCardInfo from "../ContactInfoCard";
import icons from "../../assets/icons/Icon1.svg";
import icon2 from "../../assets/icons/Icon2.svg";
import icon3 from "../../assets/icons/Icon3.svg";
import { useTranslation } from "react-i18next";

const ContactInfo = ({ link, title, description }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="contact-container container-fluid">
      <div className="col-6">
        <p style={{ color: "#007AFF" }}>{link}</p>
        <h1 className="services-title">{title}</h1>
        <p>{description}</p>
      </div>

      <div className="row w-100">
        <div className="col-xl-4 mt-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <ContactCardInfo
            phone="+999 (88) 109-20-22"
            text={t("Пн-Пт с 8 утра до 5 вечера.")}
            icon={icon3}
            title={t("Номер телефона")}
          />
        </div>
        <div className="col-xl-4 mt-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <ContactCardInfo
            phone="darkor2220@gmail.com"
            text="Наша дружная команда здесь, чтобы помочь."
            icon={icon2}
            title="Email"
          />
        </div>
        <div className="col-xl-4 mt-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <ContactCardInfo
            phone={t("contactAdress")}
            text={t("contactdesc")}
            icon={icons}
            title={t("contactOffice")}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

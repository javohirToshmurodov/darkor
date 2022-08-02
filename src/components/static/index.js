import React from "react";
import Icon from "../../assets/icons/staticicon.svg";
import { useTranslation } from "react-i18next";

const Static = () => {
  const { t } = useTranslation();
  return (
    <div className="container mt-5">
      <div className="text-center w-100">
        <p className="text-primary">{t("title")}</p>
        <h1 className="mx-auto col-8 title">{t("carttitle")}</h1>
        <br />
        <p className="mx-auto text-center col-8">{t("cartdesc")}</p>
      </div>

      <div className="gap-3 gap-lg-0 row d-flex justify-content-lg-between justify-content-center w-100">
        <div className="gap-3 p-3 card d-flex justify-content-start custom-card">
          <div className="ml-3 card-image-top">
            <img src={Icon} alt="img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{t("carttitle1")}</h5>
            <p className="card-text">{t("cartdesc1")}</p>
          </div>
        </div>
        <div className="gap-3 p-3 card d-flex justify-content-start custom-card">
          <div className="ml-3 card-image-top">
            <img src={Icon} alt="img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{t("carttile2")}</h5>

            <p className="card-text">{t("cartdesc2")}</p>
          </div>
        </div>
        <div className="gap-3 p-3 card d-flex justify-content-start custom-card">
          <div className="ml-3 card-image-top">
            <img src={Icon} alt="img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{t("carttitle3")}</h5>
            <p className="card-text">{t("cartesc3")}</p>
          </div>
        </div>
        <div className="gap-3 p-3 card d-flex justify-content-start custom-card">
          <div className="ml-3 card-image-top">
            <img src={Icon} alt="img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{t("carttitle4")}</h5>
            <p className="card-text">{t("cartdesc4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;

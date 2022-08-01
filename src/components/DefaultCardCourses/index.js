import React from "react";
import { DefaultCardWrapper } from "../../styles";
import DefaultButton from "../DefaultButton";
import { useTranslation } from "react-i18next";
export default function DefaultCard(props) {
  const { t, i18n } = useTranslation();
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 justify-content-center d-flex mb-5  ">
      <DefaultCardWrapper>
        <img className='img-fluid' src={props.img} alt="" />
        <div className="pe-3 ">
          <div>
            <h4 className='mt-2'>{t("coursename")}: {props.title}</h4>
            <p className='subtitle'>{props.subtitle.length > 40 ? `${props.subtitle.substring(0, 40)}...` : props.subtitle}</p>
          </div>
        </div>
        <div>
          <div className="line"></div>
          <DefaultButton title={t("btnText")} id={props.code} />

        </div>
      </DefaultCardWrapper>
    </div>
  );
}

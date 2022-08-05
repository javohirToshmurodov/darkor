import React from "react";

const ContactInfoCard = ({ icon, title, text, phone }) => {
  return (
    <div
      className="rounded py-4 px-3 justify-content-center align-items-center"
      style={{
        backgroundColor: "#F3F3FB",
        height: "100%",
        borderRadius: "16px",
        minHeight: "232px",
      }}
    >
      <div className="">
        <div className="mt-2 icon-wrapper card-title">
          <img src={icon} alt="icons" />
        </div>
        <div className="d-flex flex-column justify-content-between flex-1">
          <div>
            <h6 className="text-left mt-3">{title}</h6>
            <p className=" text-left minheightp "> {text}</p>
          </div>
          <div className="align-self-baseline">
            <p className="text-left text-primary">{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;

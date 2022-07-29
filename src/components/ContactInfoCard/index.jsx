import React from "react";

const ContactInfoCard = ({ icon, title, text, phone }) => {
  return (
    <div className="card justify-content-center align-items-center" style={{ backgroundColor: "#F3F3FB", height: "100%" }}>
      <div className="  card-body">
        <div className="mt-2 icon-wrapper card-title">
          <img src={icon} alt="icons" />
        </div>
        <h6 className="card-subtitle text-left mt-3">{title}</h6>
        <p className="card-text text-left"> {text}</p>
        <p className="text-left text-primary">{phone}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;

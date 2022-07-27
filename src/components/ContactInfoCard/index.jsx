import React from "react";

const ContactInfoCard = ({ icon, title, text, phone }) => {
  return (
    <div class="card" style={{ backgroundColor: "#F3F3FB", height: "100%" }}>
      <div class="  card-body">
        <div class="mt-2 icon-wrapper card-title">
          <img src={icon} alt="icons" />
        </div>
        <h6 className="card-subtitle text-left mt-3">{title}</h6>
        <p className="card-text text-left"> {text}</p>
        <p class="text-left text-primary">{phone}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;

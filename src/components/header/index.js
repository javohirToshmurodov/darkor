import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icons/chevronForward.svg";

const Header = ({
  link,
  title,
  description,
  firstButtonTitle,
  secondButtonTitle,
  icon,
}) => {
  const navigate = useNavigate()
  return (
    <div className="container services-container">
      <div className="col-6">
        <p style={{ color: "#007AFF" }}>{link}</p>
        <h1 className="services-title">{title}</h1>
        <p>{description}</p>
        <div
          className={`d-lg-flex d-block justify-content-${secondButtonTitle ? "between" : "center"
            } mx-auto btn-container gap-2 text-center`}
        >
          {firstButtonTitle && (
            <button className="mb-3 d-flex align-items-center py-2 btn btn-outline-primary d-inline-block custom-btn">
              {firstButtonTitle}
              {icon && (
                <span className="ml-2">
                  <img src={icon} />
                </span>
              )}
            </button>
          )}
          <p></p>
          {secondButtonTitle && (
            <button onClick={() => navigate("/employee")} className="mb-3 btn btn-outline-primary d-inline-block custom-btn">
              {secondButtonTitle}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
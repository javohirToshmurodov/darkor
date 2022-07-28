import React from "react";

const CardStatistiks = ({title,subTitle,text2}) => {
  return (
    <div  className="card h-100 mb-3 ">
      <div className="card-body text-center mt-4 mb-3 ">
        <h1 className="card-title text-primary ">{title}</h1>
        <h6 className="card-subtitle mb-2 ">{subTitle}</h6>
        <p className="card-text">
         {text2}
        </p>
      </div>
    </div>
  );
};

export default CardStatistiks;

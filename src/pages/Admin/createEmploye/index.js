import React, { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import AllEmployee from "./AllEmployee";

const ServiceCRUD = () => {
  const data = [
    {
      component: <CreateEmployee />,
      title: "Create new service",
    },
    {
      component: <AllEmployee />,
      title: "All services",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div>
      {data.map((item, index) => (
        <button
          key={index}
          className="mx-3 mb-4 btn btn-success"
          onClick={() => setActiveMenu(index)}
        >
          {item.title}
        </button>
      ))}
      {data[activeMenu].component}
    </div>
  );
};

export default ServiceCRUD;

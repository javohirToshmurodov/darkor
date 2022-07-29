import React, { useState,useEffect } from "react";
import CardStatistiks from "./CardStatistiks";
import { instance } from '../../redux/actions'


const ServiseStatistics = () => {
    const [state, setState] = useState([]);
  const getStatistic = async () => {
    try {
      const res = await instance.get("api/v1/statistics/list/SERVICE?size=4&page=0");
      setState(res.data.body);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStatistic();
  }, []);


  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-xl-10 mt-8 col-lg-10 col-md-10 col-sm-8 col-12">
          <h1>
            <span style={{ color: "#0568FD" }}>Мы любим то,</span> что мы
            делаем, поэтому всегда добиваемся высоких результатов.
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        {
            state.map(({description,id,number,title})=>
        <div key={id}  className=" col-xl-3 mt-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
          <CardStatistiks title={number} subTitle={title}  text2={description}/>
        </div>
                
                )
        }
           
      </div>
    </div>
  );
};

export default ServiseStatistics;

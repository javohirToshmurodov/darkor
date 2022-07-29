import React, { useState,useEffect } from "react";
import { instance } from '../../redux/actions'
import icon from '../../assets/icons/chevronForward.svg'
const HomeServise = () => {
    const [state, setState] = useState([]);
    const getData = async () => {
      try {
        const res = await instance.get("api/v1/homeService/getOne/13");
        setState(res.data.body);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
        getData();
      }, []);
      console.log(state, "sservise");
  return (
    <div style={{ backgroundColor: "#F2F2F7",marginTop:'5rem' }} className=" container-fluid">
      <div className="row">
        <div className="col-12  col-xl-6 col-lg-6 col-md-6 col-sm-12  p-5 d-flex justify-content-center align-items-center">
          <div className="card  border-0 " style={{width: "70%",backgroundColor: "#F2F2F7"}}>
            <div className="card-body">
              <h1 className="card-title">{state?.title}</h1>
              <p className="card-text">
              {state?.description}
              </p>
              <button className='btn align-items-center btn-outline-primary d-flex custom-btn'>
              Заказать услугу
               <span className='ml-2'><img src={icon} /></span>
            </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
            <div  className="card">
            <iframe style={{ width: "400px", height: "400px"}} src={`https://www.youtube.com/embed/${state?.youTubeVideo}`}  ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServise;

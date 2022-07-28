import React, { useState,useEffect } from "react";
import { instance } from '../../redux/actions'
import icon from '../../assets/icons/chevronForward.svg'
const HomeServise = () => {
    const [state, setState] = useState([]);
    const getData = async () => {
      try {
        const res = await instance.get("http://172.105.136.151:8080/api/v1/homeService/getOne/3");
        setState(res.data.body);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
        getData();
      }, []);

  return (
    <div style={{ backgroundColor: "#F2F2F7",marginTop:'5rem' }} className=" container-fluid">
      <div className="row">
        <div className="col-12  col-xl-6 col-lg-6 col-md-6 col-sm-12  p-5 d-flex justify-content-center align-items-center">
          <div className="card  border-0 " style={{width: "70%",backgroundColor: "#F2F2F7"}}>
            <div className="card-body">
              <h1 className="card-title">{state.title}</h1>
              <p className="card-text">
              {state.description}
              </p>
              <button className='btn align-items-center btn-outline-primary d-flex custom-btn'>
              Заказать услугу
               <span className='ml-2'><img src={icon} /></span>
            </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
            <div className="card">
            <img style={{width:'100%',height:'100%'}} src={state?.gallery?.url}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServise;

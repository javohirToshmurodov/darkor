import React, { useState,useEffect } from "react";
import { instance } from '../../redux/actions'
import icon from '../../assets/icons/chevronForward.svg'
import TitleH1 from '../TitleH1'
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
          <div className=" d-flex justify-content-center align-items-center flex-column border-0 " style={{width: "70%",backgroundColor: "#F2F2F7"}}>
            <div className="">
              <TitleH1 title={state?.title}/>
              <p className="">
              {state?.description}
              </p>
              <button className='btn py-2 align-items-center btn-outline-primary d-flex custom-btn'>
              Заказать услугу
               <span className='ml-2'><img src={icon} /></span>
            </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
            <div  className="card">
            <iframe style={{ width: "100%", height: "400px"}} src={`https://www.youtube.com/embed/${state?.youTubeVideo}`}  ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServise;

import React from "react";

const Media = ({ data, loading }) => {
  let count = 0;
  return (
    <div className="container ">
      {data.body?.map((item) => (
        <div
          key={item.id}
          className={`row  align-items-center justify-content-between my-5 media-container ${
            count % 2 == 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
           {item.youTubeVideo ? (<iframe
              className="media"
              src={`https://www.youtube.com/embed/${item.youTubeVideo}`}
            ></iframe>): <img src={item.gallery.url} style={{borderRadius:'24px'}}/>}
          </div>
          <div className="content d-flex justify-content-center align-items-center flex-column col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="btn btn-primary d-lg-none d-inline-block">
              Подробнее
            </button>
          </div>
          <p className="d-none">{count++}</p>
        </div>
      ))}
    </div>
  );
};

export default Media;

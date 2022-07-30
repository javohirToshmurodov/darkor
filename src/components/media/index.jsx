import React from "react";

const Media = ({ data, loading }) => {
  let count = 0;
  console.log(data, "datataaa");
  return (
    <div className="container ">
      {data.body?.map((item) => (
        <div
          key={item.id}
          className={`row  align-items-center justify-content-between my-5 media-container ${
            count % 2 == 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
            {item.gallery.extension == "jpg" ||
            item.gallery.extension == "png" ||
            item.gallery.extension == "jpeg" ? (
              <img
                src={item.gallery.url}
                alt="img"
                className="rounded media w-lg-50 w-100"
              />
            ) : (
              <iframe
                className="media"
                src={`https://www.youtube.com/embed/${item.youTubeVideo}`}
              ></iframe>
            )}
          </div>
          <div className="content col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
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

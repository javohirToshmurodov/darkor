import React from 'react'

const Media = ({ data, loading }) => {
  let count = 0

  return (
    <div className='container w-100'>
      {data.body?.map((item) => (
        <div
          key={item.id}
          className={`d-lg-flex justify-content-between mt-5 media-container ${
            count % 2 == 0 ? '' : 'flex-row-reverse'
          }`}
        >
          <div className='w-lg-50 d-flex justify-content-center'>
            {item.gallery.extension == 'jpg' ||
            item.gallery.extension == 'png' ||
            item.gallery.extension == 'jpeg' ? (
              <img
                src={item.gallery.url}
                alt='img'
                className='rounded media w-lg-50 w-100'
              />
            ) : (
              <video controls autoPlay className='media'>
                <source src={item.gallery.url} type='video/*' />
              </video>
            )}
          </div>
          <div className='content w-lg-50 w-md-50 mx-auto'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className='btn btn-primary d-lg-none d-inline-block'>
              Подробнее
            </button>
          </div>
          <p className='d-none'>{count++}</p>
        </div>
      ))}
    </div>
  )
}

export default Media

import React from 'react'

const Header = ({
  link,
  title,
  description,
  firstButtonTitle,
  secondButtonTitle,
}) => {
  return (
    <div className='container services-container'>
      <div className='col-6'>
        <p style={{ color: '#007AFF' }}>{link}</p>
        <h1 className='services-title'>{title}</h1>
        <p>{description}</p>
        <div className='d-lg-flex d-block justify-content-between mx-auto btn-container gap-2'>
          {firstButtonTitle && (
            <button className='btn btn-outline-primary  custom-btn'>
              {firstButtonTitle}
            </button>
          )}
          {secondButtonTitle && (
            <button className='btn btn-outline-primary custom-btn'>
              {secondButtonTitle}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

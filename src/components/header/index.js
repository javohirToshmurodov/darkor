import React from 'react'
import icon from '../../assets/icons/chevronForward.svg'

const Header = ({
  link,
  title,
  description,
  firstButtonTitle,
  secondButtonTitle,
  icon,
}) => {
  return (
    <div className='container services-container'>
      <div className='col-6'>
        <p style={{ color: '#007AFF' }}>{link}</p>
        <h1 className='services-title'>{title}</h1>
        <p>{description}</p>
        <div
          className={`d-lg-flex d-block justify-content-${secondButtonTitle ? 'between' : 'center'
            } mx-auto btn-container gap-2 text-center`}
        >
          {firstButtonTitle && (
            <button className='mb-3 btn align-items-center btn-outline-primary d-flex custom-btn m-lg-0'>
              {firstButtonTitle}
              {icon && (
                <span className='ml-2'>
                  <img src={icon} />
                </span>
              )}
            </button>
          )}
          <p></p>
          {secondButtonTitle && (
            <button className='btn  btn-outline-primary d-inline-block custom-btn'>
              {secondButtonTitle}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import CreateService from './createService'
import GetAllServices from './allServices'

const AdminService = () => {
  const data = [
    {
      component: <CreateService />,
      title: 'Create new service',
    },
    {
      component: <GetAllServices />,
      title: 'All services',
    },
  ]

  const [activeMenu, setActiveMenu] = useState(0)

  return (
    <div>
      {data.map((item, index) => (
        <button
          className='mx-3 mb-3 btn btn-success'
          onClick={() => setActiveMenu(index)}
        >
          {item.title}
        </button>
      ))}
      {data[activeMenu].component}
    </div>
  )
}

export default AdminService

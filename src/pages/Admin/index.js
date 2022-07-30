import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaCommentDots, FaQuestion, FaList, FaTable } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5";
import { BiBarChartAlt } from "react-icons/bi";
import { AdminMenuWrapper } from "../../styles"
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";


import { useNavigate } from 'react-router-dom';
const Admin = () => {
   const navigate = useNavigate()
   const [menuItems, setMenuItems] = useState([
      {
         pathname: "courses",
         icon: <FaList />,
         name: "Courses"
      },
      {
         pathname: "courses_info",
         icon: <FaCommentDots />,
         name: "Info-Cour"
      },
      {
         pathname: "faq",
         icon: <FaQuestion />,
         name: "FAQ"
      },
      {
         pathname: "statiscs",
         icon: <BiBarChartAlt />,
         name: "Statiscs"
      },
      {
         pathname: "form",
         icon: <IoPersonOutline />,
         name: "Users"
      }, 
      {
         pathname: 'create-employee',
         icon: <AiOutlineUsergroupAdd/>,
         name: 'Employee',
      },
      {
         pathname: 'service',
         icon: <FiShoppingCart/>,
         name: 'Service',
      },
      
      {
         pathname: 'coursetable',
         icon: <FaTable />,
         name: 'Table-Cour',
      },
   ])
   return (
      <div className=''>
         <div className="bg-dark py-3 d-flex gap-4 align-items-center justify-content-center text-white">
            <h4 className='text-white'>Admin Dashboard</h4>
         </div>

         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <AdminMenuWrapper>
                     <ul className='p-5'>
                        {
                           menuItems.map((e, i) => <li className='d-flex gap-2 mb-2 align-items-center' onClick={() => navigate(`${e.pathname}`)} key={i}>
                              {e.icon}
                              {e.name}
                           </li>)
                        }
                     </ul>
                  </AdminMenuWrapper>
               </div>
               <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12 p-5">
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Admin
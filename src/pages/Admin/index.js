import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaQuestion, FaList, FaTable, FaUsers } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5";
import { BiBarChartAlt, BiCarousel } from "react-icons/bi";
import { AdminMenuWrapper } from "../../styles"
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";


import { useNavigate } from 'react-router-dom';
import { BsFillFilePostFill } from 'react-icons/bs';
const Admin = () => {
   const navigate = useNavigate()
   const [menuItems, setMenuItems] = useState([
      {
         pathname: 'createcarousel',
         icon: <BiCarousel />,
         name: 'Carousel',
      },
      {
         pathname: "courses",
         icon: <FaList />,
         name: "Courses"
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
         icon: <AiOutlineUsergroupAdd />,
         name: 'Employee',
      },
      {
         pathname: 'service',
         icon: <FiShoppingCart />,
         name: 'Service',
      },
      {
         pathname: 'postAdd',
         icon: <BsFillFilePostFill />,
         name: 'PostAdd',
      },
      {
         pathname: 'postCrud',
         icon: <BsFillFilePostFill />,
         name: 'PostCrud',
      },
      {
         pathname: 'coursetable',
         icon: <FaTable />,
         name: 'Table-Cour',
      },
      {
         pathname: 'tableformusers',
         icon: <FaUsers />,
         name: 'Users Table',
      },
      {
         pathname: "faq",
         icon: <FaQuestion />,
         name: "FAQ"
      },

   ])
   return (
      <div className=''>
         <div className="gap-4 py-3 text-white bg-dark d-flex align-items-center justify-content-center">
            <h4 className='text-white'>Admin Dashboard</h4>
         </div>

         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <AdminMenuWrapper>
                     <ul className='p-5'>
                        {
                           menuItems.map((e, i) => <li className='gap-2 mb-2 d-flex align-items-center' onClick={() => navigate(`${e.pathname}`)} key={i}>
                              {e.icon}
                              {e.name}
                           </li>)
                        }
                     </ul>
                  </AdminMenuWrapper>
               </div>
               <div className="p-5 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Admin
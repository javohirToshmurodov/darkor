import React, { useState } from 'react';
import { FcTodoList } from "react-icons/fc"
import { FaCommentDots, FaQuestion, FaList } from "react-icons/fa"
import { AdminMenuWrapper } from "../../styles"
import { useNavigate } from 'react-router-dom';
export const AdminMenu = () => {
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
         name: "Courses_info"
      },
      {
         pathname: "faq",
         icon: <FaQuestion />,
         name: "FAQ"
      },
   ])
   return (
      <div className=''>
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
   );
};

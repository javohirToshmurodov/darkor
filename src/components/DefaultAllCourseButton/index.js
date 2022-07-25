import React from 'react'
import { DefaultButtonWrapper } from '../../styles'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
export default function DefaultAllCourseButton(props) {
   const navigate = useNavigate()
   return (
      <DefaultButtonWrapper onClick={() => navigate("courses")} >
         {props.title}
         < IoIosArrowForward />
      </ DefaultButtonWrapper>
   )
}

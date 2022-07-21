import React from 'react'
import { DefaultButtonWrapper } from '../../styles'
import { IoIosArrowForward } from 'react-icons/io'
export default function DefaultButton(props) {
   return (
      <DefaultButtonWrapper>
         {props.title}
         <IoIosArrowForward />
      </DefaultButtonWrapper>
   )
}

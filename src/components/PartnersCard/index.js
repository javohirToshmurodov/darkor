import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PartnersCardWraper } from '../../styles'
const PartnersCard = (props) => {
   const navigate = useNavigate()
   return (
      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-3'>
         <PartnersCardWraper onClick={() => navigate(`${props.linkTo}`)}>
            <img className='img-fluid' src={props.img} alt="" />
         </PartnersCardWraper>
      </div>
   )
}

export default PartnersCard
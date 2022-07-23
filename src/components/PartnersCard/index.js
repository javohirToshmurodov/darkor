import React from 'react'
import { PartnersCardWraper } from '../../styles'
const PartnersCard = (props) => {
   return (
      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-3'>
         <PartnersCardWraper>
            <img className='img-fluid' src={props.img} alt="" />
         </PartnersCardWraper>
      </div>
   )
}

export default PartnersCard
import React from 'react'
import { PartnersCardWraper } from '../../styles'
const PartnersCard = (props) => {
   return (
      <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
         <PartnersCardWraper>
            <img className='img-fluid' src={props.img} alt="" />
         </PartnersCardWraper>
      </div>
   )
}

export default PartnersCard
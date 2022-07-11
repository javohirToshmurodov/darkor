import React from 'react'
import { DefaultCardWrapper } from '../../styles'
export default function DefaultCard(props) {
  return (
    <div>
      <DefaultCardWrapper>
        <img src={props.img} alt="" />

        <h5 className='title'>{props.title}</h5>
        <p className='subtitle'>{props.subtitle}</p>
        <div className="line"></div>
      </DefaultCardWrapper>

    </div>
  )
}

import React from 'react'
import "./Card.css"
import granite from "./../assets/cards/granite.jpg"
const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='card-img'><img src={props.img} alt="" /></div>
      <div className='card-desc'>Description</div>
    </div>
  )
}

export default Card

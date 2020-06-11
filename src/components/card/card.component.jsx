import React from 'react'
import './card.style.css'
import image from '../../fed.jpg'

export const Card = ({ details }) => {
  const { name, gender } = details
  return (
    <div className="card-item">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="gender">{gender}</div>
    </div>
  )
}

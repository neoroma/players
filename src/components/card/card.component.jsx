import React from 'react'
import './card.style.css'

export const Card = ({ details }) => {
  const { name, gender } = details
  return (
    <div className="card-item">
      <div className="image">
        <img src="/fed.jpg" alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="gender">{gender}</div>
    </div>
  )
}

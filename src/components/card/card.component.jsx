import React from 'react'
import './card.style.css'

export const Card = ({ datails }) => {
  const { name, gender } = datails
  return (
    <div className="card-item" key={name}>
      <div className="image">
        <img src="/fed.jpg" alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="gender">{gender}</div>
    </div>
  )
}

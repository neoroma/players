import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = ({ cards }) => {
  return (
    <section className="card-list">
      {cards.map((details) => (
        <Card datails={details} />
      ))}
    </section>
  )
}

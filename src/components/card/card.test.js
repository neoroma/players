import React from 'react'
import { render, screen } from '@testing-library/react'

import { Card } from './card.component'

const details = {
  name: 'Roman',
  gender: 'M',
}

describe('card', () => {
  test('should run', () => {
    expect(true).toBeTruthy()
  })

  test('component', () => {
    render(<Card details={details} />)
    screen.debug()
  })
})

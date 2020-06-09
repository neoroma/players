import React from 'react'
import logo from './ao_logo.svg'
import './App.css'

const players = [
  { name: 'Rafael Nadal', id: 1 },
  { name: 'Roger Federer', id: 2 },
  { name: 'Novak Djokovic', id: 3 },
]

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      players,
    }

    this.fixText = this.fixText.bind(this)
    this.renderPlayers = this.renderPlayers.bind(this)
  }

  fixText() {
    this.setState({ text: `lololo ${Date.now()}` })
  }

  renderPlayers() {
    return (
      <ul>
        {this.state.players.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.renderPlayers()}
        </header>
      </div>
    )
  }
}

export default App

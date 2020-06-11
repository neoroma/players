import React from 'react'
import logo from './ao_logo.svg'
import axios from 'axios'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

const players = [
  { name: 'Rafael Nadal' },
  { name: 'Roger Federer' },
  { name: 'Novak Djokovic' },
]

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      players,
      originalPlayers: [],
    }

    this.filterPlayers = this.filterPlayers.bind(this)
  }

  filterPlayers(event) {
    const {
      target: { value },
    } = event

    if (value.length > 1) {
      this.setState(({ players }) => {
        return {
          players: players.filter(({ name }) => {
            return name.toLowerCase().includes(value)
          }),
        }
      })
    } else {
      this.setState(({ players, originalPlayers }) => {
        return {
          players: originalPlayers,
        }
      })
    }
  }

  componentDidMount() {
    const fetch = async () => {
      const {
        data: { results },
      } = await axios('https://swapi.dev/api/people/')
      this.setState(() => ({ players: results, originalPlayers: results }))
    }

    fetch()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBox
            handleChange={this.filterPlayers}
            placeholder="search players"
          />
          <CardList cards={this.state.players} />
        </header>
      </div>
    )
  }
}

export default App

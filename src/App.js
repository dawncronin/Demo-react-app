import './App.css';
import React from 'react'
import {CardList} from './components/card-list.component'
import { SearchBox } from './components/search-box.component'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className='App'>
        <h1> Monster Search </h1>
        <SearchBox 
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}>

        </CardList>

      </div>
    )
  }
}


export default App;

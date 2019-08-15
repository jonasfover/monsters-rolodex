import React, { Component } from "react";

import "./App.css";

import { Cardlist } from "./components/card-list/Card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search for monster"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;

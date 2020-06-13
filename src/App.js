import React from "react";
import CardList from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchFilter: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    console.log(this);
    let { name, value } = e.target;
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { monsters, searchFilter } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolotex</h1>
        <SearchBox
          name="searchFilter"
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;

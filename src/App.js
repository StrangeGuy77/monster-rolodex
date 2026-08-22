import { Component } from "react";

import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("http://localhost:4000/users")
			.then((res) => res.json())
			.then((res) => {
				this.setState(() => ({
					monsters: res.users,
				}));
			});
	}

	onSearchChange(e) {
		const searchField = e.target.value.toLowerCase();

		this.setState(() => ({
			searchField,
		}));
	}

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name?.toLowerCase().includes(searchField),
		);

		return (
			<div className="App">
				<SearchBox
					onSearchHandler={onSearchChange.bind(this)}
					placeholder="Search monsters..."
					className="search-box"
				/>
				<CardList items={filteredMonsters} />
			</div>
		);
	}
}

export default App;

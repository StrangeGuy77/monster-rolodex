import { Component } from "react";

import "./App.css";

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

	render() {
		const filteredMonsters = this.state.monsters.filter((monster) =>
			monster.name?.toLowerCase().includes(this.state.searchField),
		);

		return (
			<div className="App">
				<input
					className="searchbar"
					type="search"
					placeholder="Search monsters..."
					onChange={(e) => {
						const searchField = e.target.value.toLowerCase();

						this.setState(() => ({
							searchField,
						}));
					}}
				/>
				{filteredMonsters.map((monster) => (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default App;

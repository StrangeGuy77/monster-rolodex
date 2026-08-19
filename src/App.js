import { Component } from "react";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
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
		return (
			<div className="App">
				<input
					className="searchbar"
					type="search"
					placeholder="Search monsters..."
					onChange={(e) => {
						const searchString = e.target.value.toLowerCase();

						this.setState((curr) => {
							return {
								monsters: curr.monsters.filter((monster) =>
									monster.name.toLowercase().includes(searchString),
								),
							};
						});
					}}
				/>
				{this.state.monsters.map((monster) => (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default App;

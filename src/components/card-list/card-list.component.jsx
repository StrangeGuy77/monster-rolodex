import { Component } from "react";

export class CardList extends Component {
	render() {
		const { items } = this.props;

		return items.map((monster) => (
			<div key={monster.id}>
				<h1>{monster.name}</h1>
			</div>
		));
	}
}

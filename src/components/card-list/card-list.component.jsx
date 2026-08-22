import { Component } from "react";
import { CardContainer } from "../card-container/card-container.component";

import "./card-list.styles.css";

export class CardList extends Component {
	render() {
		const { items } = this.props;

		return (
			<div className="card-list">
				{items.map((monster) => {
					return <CardContainer key={monster.id} {...monster} />;
				})}
			</div>
		);
	}
}

import { Component } from "react";

export class Searchbox extends Component {
	render() {
		const { onSearchChange } = this.props;

		return (
			<input
				className="searchbar"
				type="search"
				placeholder="Search monsters..."
				onChange={onSearchChange}
			/>
		);
	}
}

import { Component } from "react";

export class SearchBox extends Component {
	render() {
		const { onSearchHandler, placeholder, className } = this.props;

		return (
			<input
				type="search"
				className={className}
				placeholder={placeholder}
				onChange={onSearchHandler}
			/>
		);
	}
}

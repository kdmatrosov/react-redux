/**
 * Created by root on 02.03.16.
 */
import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props)
	{
		super(props);
		this.state = {term: ''}
	}
	onChange(term)
	{
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
	render()
	{
		return (
		<div className="search-bar">
			<input
				value={this.state.term}
				onChange={event => this.onChange(event.target.value)}/>
		</div>
		);
	}
}

export default SearchBar;
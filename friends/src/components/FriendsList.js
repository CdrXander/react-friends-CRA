import React { Component } from 'react';
import './../App.css';

class FriendsList extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			searchText: "",
			orderBy: "name",
			order: "ascending"
		};
	}


	HandleChange()

	render() {
		return(
			<div>
				<form 
					className="form-inline searchForm" 
					role="form"
				>
					<div className="form-group">

						<input 
							className="form-control" 
							placeholder="Search Anything For Friends" 
							value={ this.state.searchText }
						/>

						<select 
							className="input-medium"
							value={ this.state.orderBy }
						>
							<option value="name">Name</option>
							<option value="friend_count">#Friends</option>
						</select>

						<select 
							className="input-medium"
							value={ this.state.order }
						>
							<option>Descending</option>
							<option>Ascending</option>
						</select>
					</div>
				</form>

				<ul>
				</ul>

			</div>
		)
	}
}

export default FriendsList;
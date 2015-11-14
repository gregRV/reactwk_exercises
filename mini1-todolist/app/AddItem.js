import React from 'react';

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { newItem: '' };
	}

	handleChange(e) {
		this.setState({
			newItem: e.target.value
		})
	}

	handleSubmit(e) {
		if(e.keyCode === 13){
			this.props.add(this.state.newItem);
			this.setState({
				newItem: ''
			});
		}
	}

	render() {
		return (
			<div>
				<input type="text"
					className="form-control"
					value={this.state.newItem}
					placeholder="New Item"
					onKeyDown={this.handleSubmit.bind(this)}
					onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
};

export default AddItem;
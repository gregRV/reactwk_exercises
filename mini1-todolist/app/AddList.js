import React from 'react';

class AddList extends React.Component {
	constructor(props){
		super(props);
		this.state = {name: ''};
	}

	handleChange(event){
	  let name = event.target.value;
	  this.setState({ name });
	}

	handleSubmit(){
    this.props.add(this.state);
    this.setState({ name: ''});
	}

	render(){
		let { name } = this.state;
		return (
			<section className="addList">
			  <h3>Create New List</h3>{' '}
			  <input value={ name } onChange={ this.handleChange.bind(this) }/>
			  <button className="btn btn-primary"
			          type="submit" onClick={ this.handleSubmit.bind(this) }>
			    Create List
			 </button>
			</section>
		)
	}
}

export default AddList;
import React from 'react';

class AddList extends React.Component {
	constructor(props){
		super(props);
		this.state = {listName: ''};
	}

	handleChange(event){
	  let listName = event.target.value;
	  this.setState({ listName });
	}

	handleSubmit(event){
		event.preventDefault();
		let { listName } = this.state;
    this.props.add(listName);
    this.setState({ listName: ''});
	}

	render(){
		let { listName } = this.state;
		return (
			<section className="addList">
			  <h3>Create New List</h3>
			  <input value={ listName } onChange={ this.handleChange.bind(this) }/>
			  <button className="btn btn-primary"
			          type="submit" onSubmit={ this.handleSubmit.bind(this) />
			 </section>
		)
	}
}

export default AddList;
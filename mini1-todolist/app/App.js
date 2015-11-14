import React from 'react';
import List from './ListContainer';
import AddList from './AddList';

class App extends React.Component {
  constructor(props){
  	this.state = { lists: [] };
  }

  addNewList(newList){
  	let lists =  this.state.lists.concat([newList]);
  	this.setState({ lists });
  }

	render() {
		let { lists } = this.state;
 		let containerList = lists.map((list, index) =>
 			<List key={ index } title={ list.name } />);
		return (
			<div className="container">
				<div className="row">
          <AddList add={ this.addNewList.bind(this) }/>
				  { containerList }
 				</div>
			</div>
		)
	}
};

React.render(<App />, document.getElementById('app'));
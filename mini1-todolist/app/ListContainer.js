import React from 'react';
import AddItem from './AddItem';
import List from './List';
import styles from './styles';

class ListContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = { list: [] };
	}

  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }

  handleRemoveItem(index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
	}

	render() {
		return (
      <div className="col-sm-6" style={styles.container}>
        <div className="col-sm-12">
          <h3 className="text-center">{ this.props.title } </h3>
          <AddItem add={this.handleAddItem.bind(this)} />
          <List items={this.state.list} remove={this.handleRemoveItem.bind(this)} />
        </div>
      </div>
		)
	}
}

ListContainer.defaultProps = {
	title: "Todo Lists"
}

export default ListContainer;
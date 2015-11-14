import React from 'react';
import styles from './styles';

class List extends React.Component {
  render() {
    var listItems = this.props.items.map((item, index) => {
      return (
        <li key={index} className="list-group-item" style={styles.listGroup}>
          <span
            className="glyphicon glyphicon-remove"
            style={styles.removeItem}
            onClick={this.props.remove.bind(null, index)}>
          </span>
          <span style={styles.todoItem}>
            {item}
          </span>
        </li>
      )
    }.bind(this));

    return (
	    <ul style={styles.uList}>
	      {listItems}
	    </ul>
    )
  }
}

export default List;
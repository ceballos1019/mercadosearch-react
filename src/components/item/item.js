import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.itemTitle}</li>
      </ul>
    );
  }
}

export default Item;

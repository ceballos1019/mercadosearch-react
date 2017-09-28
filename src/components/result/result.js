import React, { Component } from 'react'
import Item from '../item/item'

class Result extends Component {
  render() {
    var resultItems = this.props.searchResults.map(function(result) {
      return <Item key={result.id} itemTitle={result.title}
                   itemPrice={result.price} itemThumbnail={result.thumbnail}
                   itemSoldQuantity={result.sold_quantity}/>
    });
    return (
      <ul>
        {resultItems}
      </ul>
    );
  }
}

export default Result;

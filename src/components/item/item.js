import React, { Component } from 'react'
import './item.css'




class Item extends Component {

  /*constructor(props) {
    super(props)
    this.divStyle = {
      backgroundImage: 'url(' + 'http://mco-s2-p.mlstatic.com/634561-MCO26044997726_092017-I.jpg' + ')',
      backgroundRepeat: 'no-repeat'
    };
  }*/



  render() {
    return (
       <article className="card">
       <div className="left-content">
        <img className="item-thumbnail" src={this.props.itemThumbnail} alt="Item to sell"/>
        <p className="item-sold-quantity">{this.props.itemSoldQuantity}</p>
        </div>        
        <div className="right-content">
          <h2 className="item-title">{this.props.itemTitle}</h2>
          <label className="price">{"$ " + this.props.itemPrice}</label>
        </div>
      </article>


    );
  }
}

export default Item;

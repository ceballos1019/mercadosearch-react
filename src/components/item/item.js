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
        <img src={this.props.itemThumbnail} alt="Item to sell"/>
        <div className="card-body">
          <h2>{this.props.itemTitle}</h2>
          <p>{this.props.itemPrice}</p>
          <p>{this.props.itemSoldQuantity}</p>
        </div>
      </article>


    );
  }
}

export default Item;

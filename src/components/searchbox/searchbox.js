import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './searchbox.css'

class SearchBox extends Component {

  constructor(props) {
    super(props)
    this.test = this.test.bind(this)
  }

  test() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    this.props.search(query)
  }


  render() {
    return (
      <div className="searchbox-wrapper">
        <input type="text" placeholder="Busca tu producto..." ref="query"/>
        <button type="submit" onClick={this.test}>Buscar</button>
      </div>
    );
  }
}

export default SearchBox;

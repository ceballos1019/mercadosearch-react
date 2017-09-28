import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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
      <div>
        <input type="text" ref="query"/>
        <input type="submit" onClick={this.test} value="Buscar"/>
      </div>
    );
  }
}

export default SearchBox;

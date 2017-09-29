import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/searchbox/searchbox'
import Result from './components/result/result'
import axios from 'axios'

const url = 'https://api.mercadolibre.com/sites/MCO/search?q='

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }

    this.search = this.search.bind(this)
    this.showResults = this.showResults.bind(this)

  }

  search(query) {
    var self = this
    var searchUrl = url + query
    axios.get(searchUrl)
      .then(function(response) {
        console.log(response.data.results)
        self.showResults(response.data)
      })
      .catch(function(error) {

      })
  }

  showResults(response) {
    this.setState({
      searchResults: response.results
    })
  }


  render() {
    return (
      <div className="app-content">
        <div className="app-header">
          <h1>MercadoSearch <a href="https://github.com/ceballos1019" target="_blank" rel="noopener noreferrer">@ceballos1019</a></h1>
          <SearchBox search={this.search}/>
        </div>
        <Result className="app-body" searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/searchbox/searchbox'
import Result from './components/result/result'
import axios from 'axios'

const url2 = 'https://api.mercadolibre.com/sites/MCO/search?q=chromecast'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }

    this.search = this.search.bind(this)
    this.showResults = this.showResults.bind(this)

  }

  search(url) {
    var self = this
    axios.get(url2)
      .then(function(response) {
        self.showResults(response.data)
      })
      .catch(function(error) {

      })
  }

  showResults(response) {
    console.log("Estoy aca papo")
    this.setState({
      searchResults: response.results
    })
  }


  render() {
    return (
      <div>
      <h1>MercadoSearch @ceballos1019</h1>
      <button onClick={this.search}>Push me</button>
      <SearchBox/>
      <Result searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;

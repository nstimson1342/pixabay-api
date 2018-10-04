import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      query: "",
      hits: []
    }
    this.onClick=this.onClick.bind(this);
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  onClick(){
      axios
        .get("https://pixabay.com/api/?key=10288622-3d154ead191e9d44ba574eadc&q=" + this.state.query + "&image_type=photo")
        .then((response) => {
          console.log(response)
          this.setState({hits:response.data.hits})
        })
        .catch(error => {

        })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="search-container">
            <input type="text" placeholder="Search.." ref={input => this.search = input} onChange={this.handleInputChange}
              name="search"/>
            <button type="submit" onClick={this.onClick}>Submit</button>
        </div>
        <p className="App-intro">
          {this.state.hits.map((data)=>{
            return <img key={data.id} src={data.webformatURL} alt=""/>
          })}

        </p>
        </div>
    );
  }
}

export default App;

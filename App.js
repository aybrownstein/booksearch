import React, { Component } from 'react';
import Filter from './filter';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      booksearch:[]
    }
  }

  componentDidMount(){
    const url = "https://www.googleapis.com/books/v1/q=Key=AIzaSyCSYb2mw5WARugoqYvGe00IuLoA3Apb3GE";
    const options = {
      method: 'GET',
      headers:{
        "content-type": "application/json"
      }
    }
    fetch(url.options) 
    .then(res=> {
      if(!res.ok){
        throw new error('did not work')
      } return res;
    })
    .then(res => res.json())
    console.log(res.json())
    .then(data => {
      this.setState({
        booksearch: data,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  filter(booksearch){
    this.setState({
      booksearch: [...this.state.booksearch]
    })
  }
render() {
  return (
    <div className="App">
     <Filter handleAdd={booksearch => this.filter} />
    </div>
  );
}}

export default App;

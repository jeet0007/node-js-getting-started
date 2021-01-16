import React, { Component } from 'react';
import axios from 'axios';
// -CSS-
import '../containers/App.css';
import Header from '../components/header'
import Banner from '../components/banner'

//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/game`)
      .then(res => {
        const games = res.data;
        this.setState({ games });
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App-body">
        <Header />
        <Banner />


      </div>
    );
  }
}
export default App;
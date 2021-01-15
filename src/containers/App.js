import React, { Component } from 'react';
import axios from 'axios';
// -CSS-
import '../containers/App.css';
import Header from '../components/header'

//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }
  render() {
    return (
      <div className="App-body">
        <Header> </Header>

      </div>
    );
  }
}
export default App;
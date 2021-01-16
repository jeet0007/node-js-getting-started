import React, { Component } from 'react';
import axios from 'axios';
// -CSS-
import '../containers/App.css';
import Header from '../components/header'
import Banner from '../components/banner'
import Game from '../components/GameObject'

//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }
  componentDidMount() {
    axios.get(`/api/game`)
      .then(res => {
        const gamesData = res.data;
        this.setState({ games: gamesData });
        console.log(gamesData)
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
        <div className="Games-Container">
          {this.state.games.map(function (item, i) {
            const game = {
              launchDate: item.launchDate.toString(),
              supports: item.supports,
              images: item.images,
              id: item._id,
              name: item.name,
              url: item.url
            }
            return (<Game key={i} item={game}> { game} </Game>)
          })
          }
        </div>
      </div >
    );
  }
}
export default App;
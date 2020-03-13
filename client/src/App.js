import React from 'react';
import axios from 'axios';
import PlayerCard from "./components/PlayerCard";
import NavBar from "./components/NavBar";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log("This is the response ", response);
      this.setState({
        player: response.data
      })
    }).catch(error => {
      console.log("API get error ", error);
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
       <PlayerCard player={this.state.player}/>
      </div>
    );
  }
  
}

export default App;

import React from "react";
import PlayerCard from "./Player";
import axios from "axios";

class PlayerList extends React.Component{
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    console.log("mounted");
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({players: res.data})
      })
      .catch(err => console.log(err));
  }
  
  render(){
      return(
          <div className = "player-list">
              
              
              {this.state.players.map(player=>{
                  return <PlayerCard player = {player} key = {player.id}/>
              })}
          </div>
      )
  }
}

export default PlayerList;

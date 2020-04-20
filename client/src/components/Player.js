import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="player-card" >
      <h2>Name: {player.name}</h2>
      <h4>Country: {player.country}</h4>
      <h4>Searches: {player.searches}</h4>
    </div>
  );
}
export default PlayerCard;

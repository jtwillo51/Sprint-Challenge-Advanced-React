import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      {console.log("playerCard Props: ", player)}
      <h2>{player.name}</h2>
      <h4>{player.country}</h4>
      <h4>{player.searches}</h4>
    </div>
  );
}
export default PlayerCard;

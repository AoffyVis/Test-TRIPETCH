import React from "react";
import "./Player.css";
import PlayerDesc from "../PlayerDesc/PlayerDesc";

const Player = () => (
  <div className="Player_section">
    <div className='Player_header'>
      <span>PLAYERS</span>
    </div>
    <div className='Player_body'>
      <PlayerDesc />
    </div>
  </div>
);

export default Player;

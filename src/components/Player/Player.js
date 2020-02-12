import React from 'react';
import close from '../../images/close.png';
import AudioPlayer from "react-h5-audio-player";
import './Player.scss';

const Player = props => {

  const { onClose, activeEpisode } = props;

  return(
    
    <>
{ activeEpisode && activeEpisode.map((item, index) =>
    <div className="player-container" key={index}>
      <button className="closePlayer" onClick={onClose}><img src={close} alt="close" /></button>
    <div className="info">
    <p className="episode-title">{item.title[0].slice(0,10)}</p>
    </div>
    <AudioPlayer
    src={item["enclosure"][0].$.url}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    </div>
  )}
  </>
  )
}

export default Player;
import React from 'react';
import '../../../index.scss';
import './Episode.scss';

const Episode = props => {
  
  const { image,
          title, 
          date, 
          description, 
          index,
          onPlay,
           } = props

 return(
   <div className="episode" key={index}>
   <div className="info">
   <div className="image">
   <div onClick={() => onPlay(title)}>
     <div className="play-btn"><i className="far fa-play-circle"></i>
     <p className="play-text">Spela avsnitt</p>
     </div>
     </div>
     <img src={image} alt={title} className="episode-image" />
   </div>
   <div className="description">
 <h2>{title}</h2>
 <p className="date">{date[0].slice(5, 16)}</p>
 <p>{description}</p>
     </div>
   </div>
   </div>
 )
}

export default Episode;
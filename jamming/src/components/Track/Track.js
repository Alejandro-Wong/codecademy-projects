import React from 'react';
import './Track.css';

export default function Track({ track, onAdd, onRemove, isRemoval}) {
  const addTrack = () => {
    onAdd(track);
  };
  const removeTrack = () => {
    onRemove(track);
  };
  const renderButtons = () => {
    if (isRemoval) {
      return (
        <button className="actionButton" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="actionButton" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="trackInfo">
        <h3>{track.name}</h3>
        <p>{track.artist}&nbsp;&nbsp;&nbsp;&nbsp;<i style={{color: 'gray'}}>{track.album}</i></p>
      </div>
      {renderButtons()}
    </div>
  )
}


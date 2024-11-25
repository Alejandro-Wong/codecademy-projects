import React from 'react'
import Track from '../Track/Track';
import './Tracklist.css';

export default function Tracklist({ tracks, onAdd, isRemoval, onRemove }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  )
}

import React from 'react'
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

export default function Playlist({ playlistName, playlistTracks, updatePlaylistName, onRemove, savePlaylist}) {
  const handleNameChange = (event) => {
    updatePlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
        <h2><input onChange={handleNameChange} placeholder={playlistName}/></h2>
        <div className="playlistContainer">
          <Tracklist
            tracks={playlistTracks}
            isRemoval={true}
            onRemove={onRemove}
          />
        </div>
        <div className="saveButtonContainer">
          <button onClick={savePlaylist} className="savePlaylist"><strong>Save to Spotify</strong></button>
        </div>
    </div>
  )
}

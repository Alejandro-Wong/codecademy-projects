import React, { useState } from 'react'
import './App.css';


import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../spotify';
// import {tracks} from '../trackData'

export default function App() {
  Spotify.getAccessToken();

  // State Initializations
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Create New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  // Search
  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  // Search mock data in trackData.js
  // const search = (input) => {
  //   const results = tracks.filter(obj => Object.values(obj).some(
  //     val => val.toLowerCase().includes(input.toLowerCase())
  //     ));
  //     // setSearchResults(results);
  //     };

  // Add/Remove Tracks
  const addTrack = (track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.track !== track.track))
  };

  // Update Playlist Name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  
  // Save Playlist
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('Create New Playlist');
      setPlaylistTracks([]);
    });
  };

  
  return (
    <div className="page">
      <header className="header">
        <h1 className="logo">Jammming</h1>
        <SearchBar search={search}/>
      </header>
      <div className="App">
        {searchResults.length > 0 ? 
        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        : <div className="welcomeMessage">
            <h1>Welcome to Jammming!</h1>
            <p>A quick and easy way to search for your favorite content
              and create a custom playlist that you can save directly
              to your Spotify account!</p>
          </div>}
        {searchResults.length > 0 ? 
        <Playlist 
        playlistName={playlistName}
        playlistTracks={playlistTracks} 
        updatePlaylistName={updatePlaylistName}
        onRemove={removeTrack}
        savePlaylist={savePlaylist}
        /> : null}
      </div>
    </div>
    )
}
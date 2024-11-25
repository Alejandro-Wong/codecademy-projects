import React from 'react'
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';
// import {tracks} from './trackData';

export default function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
        <h2 id="searchResultsTitle">Search Results</h2>
        <div className="tracklistContainer">
          <Tracklist tracks={searchResults} onAdd={onAdd}/>
        </div>
    </div>
  )
}

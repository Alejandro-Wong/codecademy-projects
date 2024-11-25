import React, { useState} from 'react'
import './SearchBar.css';


export default function SearchBar({ search}) {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    if (input.length) {
      event.preventDefault();
      search(input);
      setInput('');
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchBar">
          <input
            value={input}
            onChange={handleInput}
            type="text"
            placeholder="Search Spotify"
          />
      </form>
    </div>
  )
}

import './App.css';
import SearchBar from './components/searchbar';
import SearchResults from './components/searchresult';
import Playlist from './components/playlist';
import React, { useState } from 'react';
function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  // Add review to list
  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };
  
   // Remove review from list
   const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  

  const [searchResults] = useState([
    { id: 1, accessibility: "wheel chair ramp", category: "available", review: "5/5" },
    { id: 2, accessibility: "quite area", category: "not available", review : "0/5" },
    { id: 3, accessibility: "public bathroom", category: "available", review: "3/5" },
    { id: 4, accessibility: "wheel chair ramp", category: "available", review: "4/5" },
    { id: 5, accessibility: "public bathroom", category: "available", review: "2/5" },

  ]);

  
  

  return (
    <div className="App">
      <h1 style={{ color: 'black' }}>Enter a zipcode</h1>
      <SearchBar />
      <div className="app-content">
         <SearchResults tracks={searchResults} onAddTrack={addTrackToPlaylist} />
        <Playlist playlistName={playlistName}
          onNameChange={updatePlaylistName}
          playlistTracks={playlistTracks} 
          onRemoveTrack={removeTrackFromPlaylist} // Pass remove function to Playlist
        />
      </div>
    </div>
  );
}

export default App;
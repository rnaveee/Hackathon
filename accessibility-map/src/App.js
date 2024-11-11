import './App.css';
import SearchBar from './components/searchbar';
import SearchResults from './components/searchresult';
import Playlist from './components/playlist';
import React, { useState } from 'react';
import LeafletMap from './components/leafletmap';
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

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

  

  const [searchResults, setSearchResults] = useState([
  

  ]);

  
  

  return (
    <div className="App">
      <h1 style={{ color: 'black' }}>EasyMaps</h1>
      <SearchBar />
      <div className="app-content">
         <SearchResults tracks={searchResults} onAddTrack={addTrackToPlaylist} />
        <Playlist playlistName={playlistName}
          onNameChange={updatePlaylistName}
          playlistTracks={playlistTracks} 
          onRemoveTrack={removeTrackFromPlaylist} // Pass remove function to Playlist
        />

        <LeafletMap/>
        
      </div>
    </div>
  );
}

export default App;
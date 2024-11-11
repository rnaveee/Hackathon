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

  

  const [searchResults] = useState([
    { id: 1, accessibility: "wheel chair ramp", category: "available", review: "5/5" },
    { id: 2, accessibility: "quite area", category: "not available", review : "0/5" },
  

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

function addReview(userName, typeRating, reviewText, starRating) {
  try {
    const docRef = addDoc(collection(db, "reviews"), {
      userName: userName,
      typeRating: typeRating,
      reviewText: reviewText,
      starRating: starRating,
      timestamp: Timestamp.now()
    });
    console.log("added review: ", docRef.id)
  }
  catch (error) {
    console.error("error", error)
  }
}

export default App;
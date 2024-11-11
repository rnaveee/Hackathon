import React, { useState } from 'react';
import './playlist.css';
import './track.css'
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { addReview, getLatestReview } from "../reviewConfig";


function Playlist({ playlistTracks }) {
  const [trackList, setTrackList] = useState(playlistTracks); // Store the track list including new reviews
  const [newReviewInput, setNewReviewInput] = useState(''); // For user input in the new review input box


  const handleNewReviewInputChange = (event) => {
    setNewReviewInput(event.target.value); // Update the input box as user types
  };

  const testlatest = () => {
    getLatestReview('rainier').then(r => console.log(r))
  };



  

  return (
    <div>
      <h2 className="playlist-title" style={{ color: 'black' }}>
        Please leave your own review
      </h2>
      
      <div className="track-list">
        {trackList.map((track, index) => (
          <div key={index} className="track">
            <p>
              <strong>{track.accessibility}</strong>, {track.category}
            </p>
            <p className="review-output">
              <strong>Review:</strong> {track.review}
            </p>
            <button
              onClick={() => setTrackList(trackList.filter((t, i) => i !== index))}
              className="remove-button"
              title="Remove from Playlist"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Existing Input Box for Adding New Review */}
      <div> 
      <input
        type="text"
        value={newReviewInput}
        onChange={handleNewReviewInputChange}
        placeholder="Enter accessibility, category, review"
        className="playlist-name-input"
      />
      </div>
      <button onClick={testlatest} className="searchresultbutton">
        Create Review
        
      </button>
      

      
    </div>
  );
}

export default Playlist;

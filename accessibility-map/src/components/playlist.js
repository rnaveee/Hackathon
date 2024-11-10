import React, { useState } from 'react';
import './playlist.css';
import './track.css'

function Playlist({ playlistTracks }) {
  const [trackList, setTrackList] = useState(playlistTracks); // Store the track list including new reviews
  const [newReviewInput, setNewReviewInput] = useState(''); // For user input in the new review input box



  const handleNewReviewInputChange = (event) => {
    setNewReviewInput(event.target.value); // Update the input box as user types
  };

  const addReview = () => {
    const [accessibility, category, review] = newReviewInput.split(',').map(item => item.trim());

    if (accessibility && category && review) {
      const newReview = { accessibility, category, review };
      const updatedTracks = [...trackList, newReview];

      // Update track list with new review and reset input field
      setTrackList(updatedTracks);
      setNewReviewInput('');
    } else {
      alert('Please enter details in the format: accessibility, category, review');
    }
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
      <button onClick={addReview} className="searchresultbutton">
        Create Review
      </button>
      

      
    </div>
  );
}

export default Playlist;

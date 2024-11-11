import React, { useState } from 'react';
import './playlist.css';
import './track.css'
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { addReview, getLatestReview } from "../reviewConfig";

function Playlist({ playlistTracks }) {
  const [trackList, setTrackList] = useState(playlistTracks); // Store the track list including new reviews
  const [zipcode, setZipcode] = useState(''); // Zipcode input
  const [address, setAddress] = useState(''); // Address input
  const [accessibility, setAccessibility] = useState(''); // Accessibility dropdown
  const [category, setCategory] = useState(''); // Category dropdown
  const [rating, setRating] = useState(''); // Rating dropdown
  const [textReview, setTextReview] = useState(''); // Text review input

  const addReview = () => {
    if (zipcode && address && accessibility && category && rating && textReview) {
      const newReview = { zipcode, address, accessibility, category, rating, textReview };
      const updatedTracks = [...trackList, newReview];

      // Update track list with new review and reset input fields
      setTrackList(updatedTracks);
      setZipcode('');
      setAddress('');
      setAccessibility('');
      setCategory('');
      setRating('');
      setTextReview('');
    } else {
      alert('Please fill in all fields to add a review.');
    }
  };
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
            <p><strong>Zipcode:</strong> {track.zipcode}</p>
            <p><strong>Address:</strong> {track.address}</p>
            <p><strong>Accessibility:</strong> {track.accessibility}</p>
            <p><strong>Category:</strong> {track.category}</p>
            <p><strong>Rating:</strong> {track.rating} / 5</p>
            <p><strong>Review:</strong> {track.textReview}</p>
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
      {/* Input fields for adding a new review */}
      <div className="review-inputs">
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          placeholder="Enter zipcode"
          className="input-field"
        />
        
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          className="input-field"
        />

        <select value={accessibility} onChange={(e) => setAccessibility(e.target.value)} className="input-field">
          <option value="">Select Accessibility</option>
          <option value="Wheelchair Ramp">Wheelchair Ramp</option>
          <option value="Public Bathroom">Public Bathroom</option>
          <option value="Quiet Area">Quiet Area</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
          <option value="">Select Category</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>


        <select value={rating} onChange={(e) => setRating(e.target.value)} className="input-field">
          <option value="">Select Rating</option>
          <option value="1">1 / 5</option>
          <option value="2">2 / 5</option>
          <option value="3">3 / 5</option>
          <option value="4">4 / 5</option>
          <option value="5">5 / 5</option>
        </select>

        <textarea
          value={textReview}
          onChange={(e) => setTextReview(e.target.value)}
          placeholder="Enter your review"
          className="input-field"
        />

        <button onClick={addReview} className="searchresultbutton">
          Create Review
        </button>
      </div>
    </div>
  );
}

export default Playlist;

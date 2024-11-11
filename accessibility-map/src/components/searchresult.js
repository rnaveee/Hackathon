// SearchResults.js
import React from 'react';
import './searchresult.css';

function SearchResults({ tracks, onAddTrack }) {
  return (
    <div className="search-results">
      
      <div className="track-list">
        {tracks.map(track => (
          <div key={track.id} className="track">
            <div className="track-info">
              <p>{track.accessibility} - {track.category} ({track.review})</p>
            </div>
            <button 
              onClick={() => onAddTrack(track)} 
              className="add-button"
              title="Add to Playlist"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

import React from 'react';
import './track.css';

function Track({ track }) {
  return (
    <div className="track">
      <div className="track-info">
        <div className="track-name">accessibility{track.accessibility}</div>
        <div className="track-details">category: {track.category}</div>
        <div className="track-details">review: {track.review}</div>
      </div>
    </div>
  );
}

export default Track;

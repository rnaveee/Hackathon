import React from 'react';
import Track from './tracks';

function Tracklist({ tracks }) {
  return (
    <div className="tracklist">
      {tracks && tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default Tracklist;

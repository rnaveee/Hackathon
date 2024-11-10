// TestPlaylist.js
import React, { useState } from 'react';

function TestPlaylist() {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("your playlist");

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setTempName(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input 
          type="text"
          value={tempName}
          onChange={handleNameChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <h2 onClick={handleNameClick} style={{ cursor: 'pointer' }}>
          {tempName}
        </h2>
      )}
    </div>
  );
}

export default TestPlaylist;

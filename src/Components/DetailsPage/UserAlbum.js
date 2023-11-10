import React, { useState } from 'react';
import AlbumList from './AlbumList';

const UserAlbumsSection = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h3 onClick={toggleExpanded}>User Albums (Click to Expand/Collapse)</h3>
      {expanded && (
        <div>
          <AlbumList />
        </div>
      )}
    </div>
  );
};

export default UserAlbumsSection;

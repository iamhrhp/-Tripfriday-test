import React from 'react';

const PhotoList = ({ photos }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-item"
          style={{ width: '200px', margin: '10px' }}
        >
          <img
            src={photo.url}
            alt={photo.title}
            style={{ width: '100%', height: '100px', borderRadius: '8px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;

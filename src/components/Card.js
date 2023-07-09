import React from 'react';

export const Card = ({ name, image }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        borderRadius: '10px',
        margin: '10px',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '100%', borderRadius: '10px' }}
      />
      <p
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          color: 'white',
        }}
      >
        {name}
      </p>
    </div>
  );
};

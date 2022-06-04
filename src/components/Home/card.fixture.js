import React from 'react';

function Card({ url }) {
  return (
    <img
      style={{ width: '200px', height: '200px' }}
      src={url}
      alt="new"
    />
  );
}

export default Card;

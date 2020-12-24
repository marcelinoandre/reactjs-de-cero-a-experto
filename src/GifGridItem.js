import React from 'react';
const GifGridItem = ({ img }) => {
  return (
    <div>
      <img src={img.url} alt={img.alt} />
    </div>
  );
};

export default GifGridItem;

import { useEffect, useState } from 'react';
import GifGridItem from '../GifGridItem';

const ItemsCategory = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      
      category
    
    )}&limit=10&api_key=7Ktw4O8WmoytakpzYiaJYKaUIX32rQOj`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(img => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </div>
    </>
  );
};

export default ItemsCategory;

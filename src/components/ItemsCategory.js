import { useEffect, useState } from 'react';
import GifGridItem from '../GifGridItem';

const ItemsCategory = ({ categories }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=7Ktw4O8WmoytakpzYiaJYKaUIX32rQOj`;
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
      {images.map(img => (
        <GifGridItem key={img.id} img={img} />
      ))}
    </>
  );
};

export default ItemsCategory;

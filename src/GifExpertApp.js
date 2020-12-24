import { useState } from 'react';
import AddCategory from './components/AddCategory';
import ItemsCategory from './components/ItemsCategory';

const GifExpertApp = () => {
  const [category, setCategores] = useState('One Punch');

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategores={setCategores} />
      <hr />

      <ItemsCategory category={category} />
    </>
  );
};

export default GifExpertApp;

import { useState } from 'react';
import AddCategory from './components/AddCategory';
import ItemsCategory from './components/ItemsCategory';

const GifExpertApp = () => {
  const [categories, setCategores] = useState(['One Punch']);

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategores={setCategores} />
      <hr />

      <ItemsCategory categories={categories} />
    </>
  );
};

export default GifExpertApp;

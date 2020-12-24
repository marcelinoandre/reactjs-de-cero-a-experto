import { useState } from 'react';

const AddCategory = ({ setCategores }) => {
  const [category, setCategory] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    if (!category) return console.log('vazio');
    setCategores(categores => [...categores, category]);
    setCategory('');
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        name="category"
        type="text"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddCategory;

import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setcategories] = useState([
    'One punc',
    'Samurai X',
    'Dragon Ball',
  ]);

  const handleAdd = () => {
    setcategories([...categories, 'Jojos']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;

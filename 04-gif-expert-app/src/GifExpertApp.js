import React, { useState } from 'react';

const GifExpertApp = () => {
  //const categories = ['One punc', 'Samurai X', 'Dragon Ball'];

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
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;

import { useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
  const [counter, setCounter] = useState(10);
  
  getGifs(category);
  setCounter(counter + 1);
  return (

    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
        <button onClick={() => setCounter(counter + 1)}>1</button>
    </>
  )
}

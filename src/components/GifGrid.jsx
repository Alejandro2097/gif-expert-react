import { useState } from 'react';

import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';

export const GifGrid = ({category}) => {
  const [counter, setCounter] = useState(10);
  
  useEffect(() => {
    getGifs(category);
  },[] )
  
  return (

    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
        <button onClick={() => setCounter(counter + 1)}>1</button>
    </>
  )
}

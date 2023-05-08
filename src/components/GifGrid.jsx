import { useState } from 'react';
import { useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  const {images, isLoading } = useFetchGifs(category);
  console.log(isLoading);

  
  return (

    <>
       <h3>{category}</h3>
       
       <div className="card-grid">
          {
              images.map((image) => {
                return (
                  <GifItem key={image.id}
                           {...image}/>
                )
              })
          }
       </div>
    </>
  )
}

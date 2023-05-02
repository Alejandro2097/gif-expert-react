import { useState } from "react"

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch', 'Dragon ball']);
  const onAddCatecory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    // console.log(newCategory);
    //categories.push(newCategory);
    setCategories([newCategory, ...categories])
  }

  console.log(categories);
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
              // setCategories={setCategories}
              onNewCategory={(value) => onAddCatecory(value)}      
        />
          {categories.map((category) => {
                <GifGrid 
                  key={category}
                  category={category}
                />
              })
           }
    </>
  )
}

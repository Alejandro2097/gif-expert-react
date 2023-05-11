import { useState } from "react"

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Krauser']);
  const onAddCatecory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    // console.log(newCategory);
    //categories.push(newCategory);
    setCategories([newCategory, ...categories])
  }
  console.log(categories)
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
              // setCategories={setCategories}
              onNewCategory={(value) => onAddCatecory(value)}      
        />
          {
          categories.map((category) => {
              return (
                <GifGrid 
                  key={category}
                  category={category}
                />
              )})
           }
    </>
  )
}

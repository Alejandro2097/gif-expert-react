import { useState } from "react"

import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch', 'Dragon ball']);
  const onAddCatecory = (newCategory) => {
    categories.push(newCategory);
    //setCategories([newCategory, ...categories])
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
        {/* Listado de gifs */}
        <ol>
          {categories.map(category => {
              return <li key={category}>{category}</li>
              })
           }
        </ol>
    </>
  )
}

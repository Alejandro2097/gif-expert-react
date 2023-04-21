import { useState } from "react"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch', 'Dragon ball']);
  const onAddCatecory = () => {
    setCategories([...categories, 'Resident evil 4'])
  }

  console.log(categories);
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <input/>
        {/* Listado de gifs */}
        <button onClick={onAddCatecory}>Agregar</button>
        <ol>
          {categories.map(category => {
              return <li key={category}>{category}</li>
              })
           }
        </ol>
    </>
  )
}

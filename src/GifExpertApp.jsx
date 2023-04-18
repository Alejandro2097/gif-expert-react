import { useState } from "react"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch', 'Dragon ball']);

  console.log(categories);
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
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

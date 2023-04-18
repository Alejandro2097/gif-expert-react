import { useState } from "react"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch']);

  console.log(categories);
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        {/* Listado de gifs */}
        <ol>
          {categories.}
          <li>xyz</li>
        </ol>
    </>
  )
}

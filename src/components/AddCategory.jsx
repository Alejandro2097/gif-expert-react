import { useState } from "react"


export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One punch')
  return (
    <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
    />
  )
}

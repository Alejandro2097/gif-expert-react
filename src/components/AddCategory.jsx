import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('One punch');
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue)
        setCategories(categories => [inputValue, ...categories])
    }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
    />
    </form>
    
  )
}

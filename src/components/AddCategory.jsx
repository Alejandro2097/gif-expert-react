import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState();
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        console.log('Hola mundo desde onSubmit');
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
    />
    </form>
    
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
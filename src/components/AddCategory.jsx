import { useState } from "react";
import {PropTypes} from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (event) => {
    setinputValue(event.target.value);
    // console.log(event.target.value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // setCategories((value => [...value, inputValue]));
    onNewCategory(inputValue.trim());
    setinputValue('');    
  }

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
      type="text"
      placeholder="Buscar gifs"
      value={ inputValue }
      onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
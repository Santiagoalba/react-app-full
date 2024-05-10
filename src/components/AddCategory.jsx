import { useState } from "react"

export function AddCategory({handleAddCategory}) {

  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;
    handleAddCategory(inputValue);
    setInputValue('');
  }

  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <input 
              onChange={handleInputChange}
              className="input-categories"
              type="text" 
              placeholder="Ingrese una categoría"
              value={inputValue}
            />
        </form>

    </>
  )
}

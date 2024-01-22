import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories]);
    console.log(newCategory);
  }

  return (
    <>
      <h1>GiftExpertAPP</h1>
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {
        categories.map( category => {
          return (
            <GifGrid 
              key={category} 
              category={category}/>
          )
        })
      }
    </>
  )
}

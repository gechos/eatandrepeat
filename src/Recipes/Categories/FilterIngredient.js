import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '././Filter.css'

const FilterIngredient = ({setFiltered, recip}) => {
    const [ingredientName, setIngredientName] = useState('')
    const [ingredient, setIngredient] = useState([])

  useEffect(() => {
      const getIngredientData = async () => {
          const respIngredient = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
          setIngredient(respIngredient.data.meals);
          console.log(respIngredient.data.meals)
      }
      getIngredientData();
  }, []);

  useEffect(()=>{
      const filtering = recip.filter((key) => 
      key.strIngredient?.includes(ingredientName));
      setFiltered(filtering);
      console.log(filtering)
      console.log(ingredientName)
  },[ingredientName])

  let variables = []
  const bucle = () =>{
  for (let i = 1; i<=20; i++){
    variables.push(`strIngredient${i}`)
}
  }

  const ingr = () => {
    recip.map((ing) => {
    
  })
}

    return (
        <div className='filter'>
            <h4>Ingredients</h4>
            <select onChange={(e) => setIngredientName(e.target.value)} onClick={ingr()} name="ingredient">
                {ingredient.map((key)=>
                <option key={key.idIngredient} className='option' value={key.strIngredient}>{key.strIngredient}</option>
                )}
            </select>
        </div>
    )
}

export default FilterIngredient

/* const handleChange = (event) => {
  setIngredientName(event.target.value);
} 

const handleChange = (event) => {
      setIngr(event.target.value)
    }
*/


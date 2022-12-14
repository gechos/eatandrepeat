import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Filter.css'

const FilterIngredient = ({ setFiltered, recip }) => {
  const [ingredientName, setIngredientName] = useState('')
  const [ingredient, setIngredient] = useState([])

  useEffect(() => {
    const getIngredientData = async () => {
      const respIngredient = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      setIngredient(respIngredient.data.meals);
    }
    getIngredientData();
  }, []);


  useEffect(() => {
    const filtering1 = recip.filter((key) =>
      key.strIngredient1?.includes(ingredientName));
    const filtering2 = recip.filter((key) =>
      key.strIngredient2?.includes(ingredientName));
    const filtering3 = recip.filter((key) =>
      key.strIngredient3?.includes(ingredientName));
    const filtering4 = recip.filter((key) =>
      key.strIngredient4?.includes(ingredientName));
    const filtering5 = recip.filter((key) =>
      key.strIngredient5?.includes(ingredientName));
    const filtering6 = recip.filter((key) =>
      key.strIngredient6?.includes(ingredientName));
    const filtering7 = recip.filter((key) =>
      key.strIngredient7?.includes(ingredientName));
    const filtering8 = recip.filter((key) =>
      key.strIngredient8?.includes(ingredientName));
    const filtering9 = recip.filter((key) =>
      key.strIngredient9?.includes(ingredientName));
    const filtering10 = recip.filter((key) =>
      key.strIngredient10?.includes(ingredientName));
    const filtering11 = recip.filter((key) =>
      key.strIngredient11?.includes(ingredientName));
    const filtering12 = recip.filter((key) =>
      key.strIngredient12?.includes(ingredientName));
    const filtering13 = recip.filter((key) =>
      key.strIngredient13?.includes(ingredientName));
    const filtering14 = recip.filter((key) =>
      key.strIngredient14?.includes(ingredientName));
    const filtering15 = recip.filter((key) =>
      key.strIngredient15?.includes(ingredientName));
    const filtering16 = recip.filter((key) =>
      key.strIngredient16?.includes(ingredientName));
    const filtering17 = recip.filter((key) =>
      key.strIngredient17?.includes(ingredientName));
    const filtering18 = recip.filter((key) =>
      key.strIngredient18?.includes(ingredientName));
    const filtering19 = recip.filter((key) =>
      key.strIngredient19?.includes(ingredientName));
    const filtering20 = recip.filter((key) =>
      key.strIngredient20?.includes(ingredientName));


    setFiltered([].concat(filtering1, filtering2, filtering3, filtering4, filtering5, filtering6, filtering7, filtering8, filtering9, filtering10, filtering11, filtering12, filtering13, filtering14, filtering15, filtering16, filtering17, filtering18, filtering19, filtering20));
  }, [ingredientName])

  return (
    <div className='filter'>
      <h4>Ingredients</h4>
      <div className='filter-container'>
        <select className='filter-box' onChange={(e) => setIngredientName(e.target.value)} name="ingredient">
          <option className='option'>Ingredients</option>
          {ingredient.map((key) =>
            <option key={key.idIngredient} className='option' value={key.strIngredient}>{key.strIngredient}</option>
          )}
        </select>
      </div>
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

/* useEffect(() => {
  const filtering = recip.filter((key) =>
    key.strIngredient1?.includes(ingredientName));
  setFiltered(filtering);
  console.log(filtering)
  console.log(ingredientName)
}, [ingredientName]) */

/* 
useEffect(() => {
  const filtering = recip.filter((key) => {
    if (key.strIngredient1?.includes(ingredientName) || key.strIngredient2?.includes(ingredientName)) {
      setFiltered(filtering);
      console.log(filtering)
      console.log(ingredientName)
    }
  });
}, [ingredientName]) */

/* useEffect(() => {
  const filtering = recip.filter((key) =>
    key.strIngredient2?.includes(ingredientName));
  setFiltered(filtering);
  console.log(filtering)
  console.log(ingredientName)
}, [ingredientName])

useEffect(() => {
  const filtering = recip.filter((key) =>
    key.strIngredient3?.includes(ingredientName));
  setFiltered(filtering);
  console.log(filtering)
  console.log(ingredientName)
}, [ingredientName]) */

/* let variables = []
const bucle = () => {
  for (let i = 1; i <= 20; i++) {
    variables.push(`strIngredient${i}`)
  }
}
console.log(variables)
const [varIngredient, setVarIngredient] = useState(variables)
console.log(varIngredient)
 */
import React, { useState, useEffect } from 'react'
import Categories from './Categories/Categories'
import axios from 'axios'
import MediaCard from './cardItem'
import FilterIngredient from './Categories/FilterIngredient'
import Mealsheader from './mealsheader'
import './RecipesHome.css'
import Footer from '../Home/Footer'
import FilterCountry from './Categories/FilterCountry'

const Meals = () => {
  const [recip, setRecip] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const getRecipData = async () => {
      const respRecip = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      setRecip(respRecip.data.meals);
      setFiltered(respRecip.data.meals)
      console.log(respRecip.data.meals)
    }
    getRecipData();
  }, []);

  return (

    <div class="meals-container1">
      <Mealsheader />
      <div className='filters'>
      <FilterIngredient recip={recip} setFiltered={setFiltered} />
      <FilterCountry recip={recip} setFiltered={setFiltered} />
      </div>
      <Categories />
      <div className='meals1'>
        {filtered.map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />)}

      </div>
      <button className='btn'>Ver más</button>
      <div className='footer-meals'>
        <Footer />
      </div>
    </div>
  )
}

export default Meals

/* 
  const [recipe, setRecipe] = useState([])
useEffect(() => {
  fetchRecipe();
}, []);

const fetchRecipe = async() => {
const data = await fetch(
  'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
);
const recipes = await data.json();
setRecipe(recipes.results);
console.log(recipes)
};

return (
<div>
    <Categories />
    <div className='categories'>
    {recipe.map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />)}
    </div>
</div>
) 
*/
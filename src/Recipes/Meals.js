import React, { useState, useEffect } from 'react'
import Categories from './Categories/Categories'
import axios from 'axios'
import MediaCard from './cardItem'
import FilterIngredient from './Categories/FilterIngredient'
import Mealsheader from './mealsheader'

const Meals = () => {
  const [recip, setRecip] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
      const getRecipData = async () => {
          const respRecip = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
          setRecip(respRecip.data.meals);
          setFiltered(respRecip.data.meals)
         
      }
      getRecipData();
  }, []);

  return (
      <div class="meals-container">
        <Mealsheader />
        <FilterIngredient recip={recip} setFiltered={setFiltered}/>
        <Categories />
          <div className='meals'>
          {recip.map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />)}
          </div>
          <button className='btn'>Ver más</button>
      </div>
  )
}

export default Meals

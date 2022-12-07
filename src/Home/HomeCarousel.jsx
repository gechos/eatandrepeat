import axios from "axios";
import {useState, useEffect} from 'react';
import FeaturedRecipe from './FeaturedRecipe';
import * as API from '../Services/launchesApis'



 
const HomeCarousel = () => {

  const [meal, setMeal] = useState([])

    useEffect(()=>{
        API.getLauncheRandom().then (setMeal);
    },[]);
  console.log(meal)
   
  useEffect(() => {
    const interval = setInterval(() => {
        API.getLauncheRandom().then (setMeal)
    }, 8000);
    return () => clearInterval(interval);
  }
)

  return (
        <div>
            <FeaturedRecipe key={meal.idMeal} id={meal.idMeal} img={meal.strMealThumb} meal={meal.strMeal} description={meal.strInstructions}/>
        </div>
    )
  }
export default HomeCarousel
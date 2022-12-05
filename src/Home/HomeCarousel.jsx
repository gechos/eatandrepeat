import axios from "axios";
import {useState, useEffect} from 'react';
import FeaturedRecipe from './FeaturedRecipe';


const HomeCarousel = () => {
  const [meal, setMeal] = useState([])
  useEffect(() => {
    const getMealData = async () => {
      const respMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      setMeal(respMeal.data.meals[0]);
    }
    getMealData();
  }, [])

  /*useEffect(() => {
    const interval = setInterval(() => {
        const getMealData = async () => {
          const respMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
          setMeal(respMeal.data.meals[0]);
          console.log(respMeal.data.meals[0])
        }
    getMealData();
    }, 8000);
    return () => clearInterval(interval);
  }
)*/

  return (
        <div>
            <FeaturedRecipe key={meal.idMeal} id={meal.idMeal} img={meal.strMealThumb} meal={meal.strMeal} description={meal.strInstructions}/>
        </div>
    )
  }
export default HomeCarousel
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';
import Card from "./card.js";

function App() {
  const [meal, setMeal] = useState([])

  useEffect(() => {
    const getMealData = async () => {
      const respMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      setMeal(respMeal.data.meals[0]);
      console.log(respMeal.data.meals[0])
    }
    getMealData();
  }, []);

  return (
    <div>
      <Card key={meal.idMeal} img={meal.strMealThumb} meal={meal.strMeal} description={meal.strInstructions}/>
    </div>
  );
}

export default App;
/* 
{Object.keys(meal).map((key) => 
  <Dog ={key}
      subBreed={dogs[key]}/>)} */
import React from 'react'
import { AppContext } from '../Context/context'
import MediaCard from './cardItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '././RecetasHome.css'

const RecetasHome = () => {
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const getMealData = async () => {
            const respMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            setMeal(respMeal.data.meals);
            console.log(respMeal.data.meals)
        }
        getMealData();
    }, []);

    return (
        <div class="meals-container">
            <div className='meals'>
            {meal.slice(1,5).map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />)}

            </div>
            <button className='btn'>Ver más</button>
        </div>
    )
}

export default RecetasHome


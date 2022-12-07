import { useState, useEffect } from 'react'
import MediaCard from './cardItem';
//importamos las funciones
import * as API from '../Services/launchesApis'
import MediaCard from './cardItem'



const RecipesList = () => {
    const [launches,setLaunches] = useState([])

    useEffect(()=>{
        API.getLauncheByLetter("b").then (setLaunches);
    },[]);
    //console.log(launches);
    return (
        <>
            <h1> Lauches Api B</h1>
            <div class="meals-container">
                <div className='meals'>
                    {launches.map((launch) => (<MediaCard className="meal" key={launch.idMeal} img={launch.strMealThumb} meal={launch.strMeal} description={launch.strInstructions} />))}
                </div>
                <button className='btn'>See more...</button>
            </div>
        </>
        
    )
}
export default RecipesList;
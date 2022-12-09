import React from 'react'
import './Letters.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from '../cardItem'


const Letters = () => {
  const [a, setA] = useState(false)

    useEffect(() => {
        const getAData = async () => {
            const respA = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            setA(respA.data.meals);
        }
        getAData();
    }, []);

  return (
    <div>
    <div className='letters'>
        <button onclick={()=>setA(!a)} className='clickable'>A</button>
        <button className='clickable'>B</button>
        <button className='clickable'>C</button>
        <button className='clickable'>D</button>
        <button className='clickable'>E</button>
        <button className='clickable'>F</button>
        <button className='clickable'>G</button>
        <button className='clickable'>H</button>
        <button className='clickable'>I</button>
        <button className='clickable'>J</button>
        <button className='clickable'>K</button>
        <button className='clickable'>L</button>
        <button className='clickable'>M</button>
        <button className='clickable'>N</button>
        <button className='clickable'>O</button>
        <button className='clickable'>P</button>
        <button className='clickable'>Q</button>
        <button className='clickable'>R</button>
        <button className='clickable'>S</button>
        <button className='clickable'>T</button>
        <button className='clickable'>U</button>
        <button className='clickable'>V</button>
        <button className='clickable'>W</button>
        <button className='clickable'>X</button>
        <button className='clickable'>Y</button>
        <button className='clickable'>Z</button>
    </div>
    <div className='meals2'>
    {a? a.map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />) : null}
    </div>
    </div>
  )
}

export default Letters
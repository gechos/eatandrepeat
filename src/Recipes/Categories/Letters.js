import { Link, useParams } from 'react-router-dom';
import * as API from '../../Services/launchesApis';
import './Letters.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from '../cardItem'


const Letters = () => {
  const [click, setClick] = useState(false)
  let array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

<<<<<<< HEAD
  const [launches,setLaunches] = useState([])
  
    useEffect(()=>{
        API.getLauncheByLetter('b').then (setLaunches);
    },[click]);
    
  
  
=======
    useEffect(() => {
        const getAData = async () => {
            const respA = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            setA(respA.data.meals);
        }
        getAData();
    }, []);
>>>>>>> Laura

  return (
    <div>
      <div className='letters'>
        {array.map((item) => 
              <button onClick={()=>{setClick(!click)} } className='clickable' key={item}>
                    {item}
              </button>
            )}    
      </div>
      <div className='meals2'>
          {click? launches.map((key) => <MediaCard 
          className="meal" 
          key={key.idMeal} 
          img={key.strMealThumb} 
          meal={key.strMeal} 
          description={key.strInstructions} />) : null}
      </div>
    </div>
  )
}
export default Letters
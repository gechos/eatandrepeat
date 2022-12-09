import { Link } from 'react-router-dom';
import './Letters.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from '../cardItem'


const Letters = () => {
  const [click, setClick] = useState(false)
  let array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


    useEffect(() => {
        const getData = async () => {
            const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            setClick(resp.data.meals);
        }
        getData();
    }, []);

  return (
    <div>
      <div className='letters'>
        {array.map((item) => 
              <button onClick={()=>{setClick(!click)} } className='clickable'>
                    {item}
              </button>
            )}    
      </div>
      <div className='meals2'>
          {click? click.map((key) => <MediaCard 
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
import { Link, useParams } from 'react-router-dom';
import * as API from '../../Services/launchesApis';
import './Letters.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from '../cardItem'


const Letters = () => {
  const [click, setClick] = useState(false)
  let array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const [launches,setLaunches] = useState([])
  const [id,SetId]=useState('A')
  console.log('id')
 
  
    useEffect(()=>{ 
        API.getLauncheByLetter({id}).then (setLaunches);
    },[click]);
    
  
  

  return (
    <div>
      <div className='letters'>
        {array.map((item) => 
              <button onClick={()=>{setClick(!click)}} onChange={(e) => SetId(e.target.value)}  className='clickable' key={item}>
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
import {useLocation} from 'react-router-dom'; 
import "./CompleteRecipe.css";
import {useEffect, useState} from 'react'; 
import axios from 'axios';

export default function CompleteRecipe() {
    const location = useLocation();
    const { id } = location.state;
    const [meal, setMeal] = useState([""]);


    useEffect(() => {
        const getMealData = async () => {
          var respMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          setMeal(respMeal.data.meals);
          console.log(meal);
        }
        getMealData();
      }, [])  
  

 return (
       <div className="CompleteRecipe_container">
           <div className="CompleteRecipe_text">
               <div className="CompleteRecipe_section">

                   <h1 className="CompleteRecipe_title">{meal[0].strMeal}</h1> 
                   
                      <img className='recipe-image' src={meal[0].strMealThumb}/>

                     <h3>Ingredients:</h3>

                      <div className='ingredients'>                
                       <p>{meal[0].strIngredient1}</p>
                       <p>{meal[0].strIngredient2}</p>
                       <p>{meal[0].strIngredient3}</p>
                       <p>{meal[0].strIngredient4}</p>
                       <p>{meal[0].strIngredient5}</p>
                       <p>{meal[0].strIngredient6}</p>
                       <p>{meal[0].strIngredient7}</p>
                       <p>{meal[0].strIngredient8}</p>
                       <p>{meal[0].strIngredient9}</p>
                       <p>{meal[0].strIngredient10}</p>
                       <p>{meal[0].strIngredient11}</p>
                       <p>{meal[0].strIngredient12}</p>
                       <p>{meal[0].strIngredient13}</p>
                       <p>{meal[0].strIngredient14}</p>
                       <p>{meal[0].strIngredient15}</p>
                       <p>{meal[0].strIngredient16}</p>
                       <p>{meal[0].strIngredient17}</p>
                       <p>{meal[0].strIngredient18}</p>
                       <p>{meal[0].strIngredient19}</p>
                       <p>{meal[0].strIngredient20}</p>
                      </div> 
 
                    <h3>Instructions:</h3>
                    <p>{meal[0].strInstructions}</p>

               </div>         
           </div>

           <button>←</button>  <button>→</button>
 
       </div>
   );
}

import { useLocation } from 'react-router-dom';
import "./CompleteRecipe.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CompleteRecipe() {
  const location = useLocation();
  const { id } = location.state;
  const [meal, setMeal] = useState([""]);

  const [recipe, setRecipe] = useState(parseInt(id));


  useEffect(() => {
    const getMealData = async () => {
      var respMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`);
      setMeal(respMeal.data.meals);
    }
    getMealData();
  }, [recipe])


  return (
    <div className="CompleteRecipe_container">
      <div className="CompleteRecipe_text">
        <div className="CompleteRecipe_section">


          <div className='complete-recipe-container'>
            <div className='left content'>
              <img className='recipe-image' src={meal[0].strMealThumb} />
            </div>
            <div className='right-content'>
              <h2 className="complete-recipe-title">{meal[0].strMeal}</h2>
              <h3>INGREDIENTS:</h3>

              <div className='ingredients'>
                <span>{meal[0].strMeasure1} <strong>{meal[0].strIngredient1}</strong></span>
                <span>{meal[0].strMeasure2} <strong>{meal[0].strIngredient2}</strong></span>
                <span>{meal[0].strMeasure3} <strong>{meal[0].strIngredient3}</strong></span>
                <span>{meal[0].strMeasure4} <strong>{meal[0].strIngredient4}</strong></span>
                <span>{meal[0].strMeasure5} <strong>{meal[0].strIngredient5}</strong></span>
                <span>{meal[0].strMeasure6} <strong>{meal[0].strIngredient6}</strong></span>
                <span>{meal[0].strMeasure7} <strong>{meal[0].strIngredient7}</strong></span>
                <span>{meal[0].strMeasure8} <strong>{meal[0].strIngredient8}</strong></span>
                <span>{meal[0].strMeasure9} <strong>{meal[0].strIngredient9}</strong></span>
                <span>{meal[0].strMeasure10} <strong>{meal[0].strIngredient10}</strong></span>
                <span>{meal[0].strMeasure11} <strong>{meal[0].strIngredient11}</strong></span>
                <span>{meal[0].strMeasure12} <strong>{meal[0].strIngredient12}</strong></span>
                <span>{meal[0].strMeasure13} <strong>{meal[0].strIngredient13}</strong></span>
                <span>{meal[0].strMeasure14} <strong>{meal[0].strIngredient14}</strong></span>
                <span>{meal[0].strMeasure15} <strong>{meal[0].strIngredient15}</strong></span>
                <span>{meal[0].strMeasure16} <strong>{meal[0].strIngredient16}</strong></span>
                <span>{meal[0].strMeasure17} <strong>{meal[0].strIngredient17}</strong></span>
                <span>{meal[0].strMeasure18} <strong>{meal[0].strIngredient18}</strong></span>
                <span>{meal[0].strMeasure19} <strong>{meal[0].strIngredient19}</strong></span>
                <span>{meal[0].strMeasure10} <strong>{meal[0].strIngredient20}</strong></span>
              </div>
            </div>
          </div>

          <h3>INSTRUCTIONS:</h3>
          <p className='instructions'>{meal[0].strInstructions}</p>

        </div>
      </div>

      <div className="recipe_btn">
        <button className="btn" onClick={() => setRecipe(recipe - 1)}>←</button>     <button className="btn" onClick={() => setRecipe(recipe + 1)}>→</button>
      </div>

    </div>
  );
}

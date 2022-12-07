import { useContext} from "react";
import { RecipesContext} from "../Context/RecipesContextProvider";
import MediaCard from "./cardItem";


export const RecipesList = () => {
  
  const recipes = useContext(RecipesContext)

    return (
        <div class="meals-container">
            <div className='meals'>
            {recipes.map((recipe) => <MediaCard className="meal" key={recipe.idMeal} img={recipe.strMealThumb} meal={recipe.strMeal} description={recipe.strInstructions} />)}

            </div>
            <button className='btn'>See details</button>
        </div>
    )
}


export default RecipesList
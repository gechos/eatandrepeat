import { useContext} from "react";
import { RecipesContext} from "../Context/RecipesContextProvider";


export const RecipesList = () => {
  
  const recipes = useContext(RecipesContext)
   

  return (
    <div className="cardsContainer">
        { recipes.map(recipe => {
            return(
              <div className="card" key={recipe.idMeal}>
                <img src={recipe.strMealThumb} className="card-img"  alt="imagen"/>
                <p className="recipe-name">{recipe.strMeal}</p>
                <div className="SelectContainer">
                    <button>Select recipe</button>
                </div>
              </div>
          )
        })
      }
    </div>
  )
}


export default RecipesList
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const RecipesContext = createContext()


export const RecipesContextProvider = ({children}) => {

    const [Recipes, setRecipes]=useState([])
  
    useEffect(() => {
        const getMealData = async () => {
            const respMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            setRecipes(respMeal.data.meals);
        }
        getMealData();
    }, []);
    
    
      return (
      <RecipesContext.Provider value={Recipes}>
          {children}
      </RecipesContext.Provider>
      
    )
  }
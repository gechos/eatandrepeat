import { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const ItemContext = createContext()

export const ItemContextProvider = ({children}) => {
    const[Item, setItem]= useState([])
   
    useEffect(() => {
      const getMealData = async id => {
          const respMeal = await axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          setItem(respMeal.data.meals);
          console.log( "set context Item",respMeal.data.meals)
      }
      getMealData();
  }, []);

  return (
    <ItemContext.Provider value={[
        Item,
        setItem
        ]
    }>
        {children}
    </ItemContext.Provider>
  )
}

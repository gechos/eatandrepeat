import axios from 'axios';
import { useState,useEffect } from 'react';
import './Search.css';

import Autosuggest from 'react-autosuggest';


export default function FreeSolo() {


    useEffect(() => {
      const getSearchData = async () => {
        var respSearch = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=b`)
        setSearch(respSearch.data.meals);
      }
      getSearchData();
    }, [])  

  const [search, setSearch] = useState([""])
  
  const data = search; // para seguir usando data de valor, equivalemos lo que sacamos de la api a data
  
  const[meals, setMeals] = useState(data);
  const [value, setValue]= useState("");
  const [selectedMeal, setSelectedMeal]= useState({})

  const onSuggestionsFetchRequested=({value})=>{
    setMeals(filterMeals(value));
  }

  const filterMeals=(value)=>{
    const inputValue = value.trim().toLowerCase();

    const inputLength = inputValue.length; // para medir si fuera cero y que no pete

    let filtered = data.filter((strMeal)=> {
      let completeText = strMeal.strMeal;
      

      if(completeText.toLowerCase().normalize("NFD").includes(inputValue)){
        return strMeal.strMeal; // esto posiblemente es erróneo chequear
      }
    });
    return inputLength === 0 ? [] : filtered;
  }

  const onSuggestionsClearRequested = () => {
    setMeals([])
  }

  const getSuggestionValue=(suggestion)=>{
    return `${suggestion.strMeal}`;
  }

  const renderSuggestion=(suggestion)=>( 
    <div className='suggestion' onClick={()=>selectMeal(suggestion)}>
      {`${suggestion.strMeal}`}
    </div>
  )

  const selectMeal=(strMeal)=> {
    setSelectedMeal(strMeal);
  }

  const onChange=(e, {newValue}) =>{
    setValue(newValue);
  }

  const inputProps = {
    placeholder:"Search",
    className: "search-container",
    value,
    onChange
  }

  
  return (
   <div className="search">

      <Autosuggest 
          suggestions={meals}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested} // llamada al recalcular sugerencias
          onSuggestionsClearRequested={onSuggestionsClearRequested} // llamada a limpiar sugerencias
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        
        />
      <button type="submit" className="search-button" onClick={()=>console.log(selectedMeal.strMeal)}>
        <ion-icon className="icon" name="search-outline"></ion-icon>
      </button>

  </div>)};

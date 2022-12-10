import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react';
import PopUp from './PopUp.js'
import './Footer.css';

function Footer() {
    
    const [shownPopUp, setShownPopUp] = useState(false);
    const [randomMeal, setRandomMeal] = useState([]);


    useEffect(() => {
        const randomRecipe = async () => {
                const respRandomMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                setRandomMeal(respRandomMeal.data.meals[0]);
                console.log(respRandomMeal)
            } 
            randomRecipe();
        }, [shownPopUp])


    return (
        <div className="foot">
            <button className="btn" onClick={()=> {setShownPopUp( !shownPopUp ? true : false)}}>Random</button>
                
                {shownPopUp ? <div>
                    
                    <PopUp key={randomMeal.idMeal} 
                    img={randomMeal.strMealThumb} 
                    meal={randomMeal.strMeal} 
                    description={randomMeal.strInstructions}
                    close={()=>setShownPopUp()} />
                    
                     </div> 
                : null}
            <><p className="footerText">Eat and Repeat © 2022</p></>
        </div>
    )

}

export default Footer;

import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import PopUp from './PopUp.js'
import './Footer.css';
import background from './food2.jpg'

function Footer() {

    const [shownPopUp, setShownPopUp] = useState(false);
    const [randomMeal, setRandomMeal] = useState([]);


    useEffect(() => {
        const randomRecipe = async () => {
                const respRandomMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                setRandomMeal(respRandomMeal.data.meals[0]);
            } 
            randomRecipe();
        }, [shownPopUp])


    return (
        <>
            <div className="foot" style={{ backgroundImage: `url(${background})` }}>
                <div className="overlay1">
                    <div className="left-container1">
                        <div className="title-subtitle1">
                            <h2 className="title-footer">You don't know what to prepare to eat?</h2>
                            <p className="footer-text">Click on the button to see a random meal</p>
                        </div>
                        <p className="footer-text-small">Eat and Repeat © 2022</p>
                    </div>
                    <button className="btn" onClick={() => { setShownPopUp(!shownPopUp ? true : false) }}>Random</button>
                </div>
                {shownPopUp ? <div>

                    <PopUp key={randomMeal.idMeal}
                        img={randomMeal.strMealThumb}
                        meal={randomMeal.strMeal}
                        description={randomMeal.strInstructions}
                        ingredient1={randomMeal.strIngredient1}
                        ingredient2={randomMeal.strIngredient2}
                        ingredient3={randomMeal.strIngredient3}
                        ingredient4={randomMeal.strIngredient4}
                        close={() => setShownPopUp()} />

                </div>
                    : null}
            </div>
        </>
    )

}

export default Footer;

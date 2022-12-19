import { useState } from 'react';
import './PopUp.css';
import {Link} from 'react-router-dom';


function PopUp(props) {



    return (
        <div className='popup'>
            <div className='btn-container'><button className="closeBtn" onClick={props.close}>x</button></div>
            <img className="img-popup" src={props.img}></img>
            <br />
            <b className='title-popup'>{props.meal}</b>
            <div className='container-ingredients'>
                <p className='title-underline'>Principal ingredients</p>
                <div className='ingredients-popup'>
                    <p className='ingredient-popup'><b className='ingredient-popup'>1. </b>{props.ingredient1}</p>
                    <p className='ingredient-popup'><b className='ingredient-popup'>2. </b>{props.ingredient2}</p>
                    <p className='ingredient-popup'><b className='ingredient-popup'>3. </b>{props.ingredient3}</p>
                    <p className='ingredient-popup'><b className='ingredient-popup'>4. </b>{props.ingredient4}</p>
                </div>
            </div>
            <Link to="/CompleteRecipe" state={{id: `${props.id}`}}>
                <><button className="btn">Details</button></>
            </Link>
        </div>
    )

}

export default PopUp;
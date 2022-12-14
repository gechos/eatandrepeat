import MediaCard from './cardItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './RecipesHome.css'
import {Routes, Route, useNavigate} from 'react-router-dom';

const RecipesHome = () => {
    const [meal, setMeal] = useState([])
    const [page, setPage] = useState(0);
    const [pagination, setPagination] = useState([]);
    const navigate = useNavigate();

    const navigateToMeals = () => {
        navigate('/Meals');
    };

    useEffect(() => {
        let newPagination = [];
        for (let i = 0; i < meal.length / 8; i++) {
            newPagination.push(
                <button className="button-page" onClick={() => {
                    setPage(i);
                }}>{i + 1}</button>);
        }
        setPagination(newPagination);
    }, []);


    useEffect(() => {
        const getMealData = async () => {
            const respMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            setMeal(respMeal.data.meals);
        }
        getMealData();
    }, []);

    return (
        <div class="meals-container">
            <div className='meals'>
                <button className="button-scroll" onClick={() => (page == 0 ? null : setPage(page - 1))}><ion-icon className='icon' name="chevron-back-outline"></ion-icon></button>
                {meal.slice(page * 4, (page + 1) * 4).map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />)}
                <button id='btn-right' className="button-scroll" onClick={() => (page == 7 ? null : setPage(page + 1))}><ion-icon className='icon' name="chevron-forward-outline"></ion-icon></button>
            </div>
            <button onClick={navigateToMeals} className='btn'>See More</button>
        </div>
    )
}

export default RecipesHome;



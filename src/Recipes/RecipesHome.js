import MediaCard from './cardItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './RecipesHome.css'

const RecipesHome = () => {
    const [meal, setMeal] = useState([])
    const [page, setPage] = useState(0);
    const [pagination, setPagination] = useState([]);

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
        <div className="meals-container">
            <div className='meals'>
                <button className="button-scroll" onClick={() => (page == 0 ? null : setPage(page - 1))}><ion-icon className='icon' name="chevron-back-outline"></ion-icon></button>
                {meal.slice(page * 4, (page + 1) * 4).map((key) => <MediaCard className="meal" key={key.idMeal} img={key.strMealThumb} meal={key.strMeal} description={key.strInstructions} />)}
                <button id='btn-right' className="button-scroll" onClick={() => (page == 7 ? null : setPage(page + 1))}><ion-icon className='icon' name="chevron-forward-outline"></ion-icon></button>
            </div>
            <button className='btn'>Ver más</button>
        </div>
    )
}

export default RecipesHome;



import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Category from './Category';
import Letters from './Letters';

const Categories = () => {

    const [letters, setLetters] = useState(false)

    return (
        <div>
            <Category/>
        </div>
    )
};

export default Categories

/* const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategoriesData = async () => {
            const respCategories = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            setCategories(respCategories.data.categories);
        }
        getCategoriesData();
    }, [categories]); */
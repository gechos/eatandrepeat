import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css'
import Alphabetical from './Alphabetical';
import Letters from './Letters';
import image from './././letters.png'


const Category = () => {
    const [category, setCategory] = useState([])
    const [letters, setLetters] = useState(false)

    useEffect(() => {
        const getCategoryData = async () => {
            const respCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            setCategory(respCategory.data.categories);
        }
        getCategoryData();
    }, []);

    return (
        <div>
        <div className='categories'>
            <div className='category'>
                <button className='clickable2' onClick={()=> setLetters(!letters)}>
                    <Alphabetical />
                </button>
            </div>
            {category.map(category => (
                <button onClick={()=> setLetters(false)} className='btn-category'>
                    <div className='category' key={category.idCategory}>
                    <img width='60px' src={category.strCategoryThumb} alt="picture-category" />
                    <h6>{category.strCategory}</h6>
                </div>
                </button>
            ))}
        </div>
        {letters ? <Letters /> : null}
        </div>
    )
};

export default Category
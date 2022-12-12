import { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css'
import Alphabetical from './Alphabetical';
import Letters from './Letters';


const Category = ({onClickItem}) => {
    const [categories, setCategories] = useState([])
    const [letters, setLetters] = useState(false)

    const handleOnClick = () =>{
        setLetters(!letters)
    }
    const handleOnClickLetter =(letter)=>{

        onClickItem('Letter', letter)
    }
    const handlerOnClickCategory =(category)=>{

        onClickItem('Category', category)
    }

    useEffect(() => {
        const getCategoryData = async () => {
            const respCategories = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            setCategories(respCategories.data.categories);
        }
        getCategoryData();
        
    }, []);

    return (
        <div>
        <div className='categories'>
            <div className='category'>
                <button className='clickable2' onClick={handleOnClick}>
                    <Alphabetical />
                </button>
            </div>
            {categories.map(category => (
                <button onClick={ ()=> handlerOnClickCategory(category.strCategory)} className='btn-category'>
                    <div className='category' key={category.idCategory}>
                    <img width='60px' src={category.strCategoryThumb} alt="Not exist" />
                    <h6>{category.strCategory}</h6>
                </div>
                </button>
            ))}
        </div>
        {letters ? <Letters onClickLetter={handleOnClickLetter} /> : null}
        </div>
    )
};

export default Category
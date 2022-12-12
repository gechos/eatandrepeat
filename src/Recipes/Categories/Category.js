import { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css'
import Alphabetical from './Alphabetical';
import Letters from './Letters';
import Area from './Area';
import Countries from './Countries';

const Category = ({onClickItem}) => {
    const [categories, setCategories] = useState([])
    const [letters, setLetters] = useState(false)
    const [areas, setAreas] = useState(false)

    const handleOnClick = () =>{
        setLetters(!letters)
        setAreas(false)
    }
    const handleOnClickCountry = () =>{
        setAreas(!areas)
        setLetters(false)
    }
    const handleOnClickLetter =(letter)=>{

        onClickItem('Letter', letter)
    }
    const handleOnClickCategory =(category)=>{

        onClickItem('Category', category)
    }

    const handleOnClickArea =(area)=>{

        onClickItem('Area', area)
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
                <button onClick={ ()=> handleOnClickCategory(category.strCategory)} className='btn-category'>
                    <div className='category' key={category.idCategory}>
                    <img width='60px' src={category.strCategoryThumb} alt="Not exist" />
                    <h6>{category.strCategory}</h6>
                </div>
                </button>
            ))}
            <button className='clickable2' onClick={handleOnClickCountry}>
                    <Area />
                </button>
        </div>
        {letters ? <Letters onClickLetter={handleOnClickLetter} /> : null}
        {areas ? <Countries onClickCountry={handleOnClickArea} /> : null}
        </div>
    )
};

export default Category
import React, { useState, useEffect } from "react";
import axios from "axios";
import MealsMenu from './MealsMenu';
import { getLauncheByCategory} from '../Services/launchesApis';
import CardMedia from '@mui/material/CardMedia';
import {Heart} from './Heart';
import MenuPrint from "./MenuPrint";
import './cardMenu.css'




const MenuHeader = () => {

  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState([]);
 
  const [select, setSelect] = useState([]);
  const [print, setPrint] = useState(false)
    

    const handleOnClick = () =>{
        setPrint(true)

    }

  
  const handleOnClickItem=(item)=>{
   getLauncheByCategory([item]).then((res)=>{
      setFiltered(res)
      let newPagination = [];
        for (let i = 0; i < filtered.length / 8; i++) {
            newPagination.push(
                <button className="button-page" onClick={() => {
                    setPage(i);
                }}>{i + 1}</button>);
        }
        setPagination(newPagination);
        });
  }
 
  useEffect(() => {
    const getCategoryData = async () => {
        const respCategories = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        setCategories(respCategories.data.categories);
    }
    getCategoryData();
    
}, []);
   useEffect(() => {
        let newPagination = [];
        for (let i = 0; i < filtered.length / 8; i++) {
            newPagination.push(
                <button className="button-page" onClick={() => {
                    setPage(i);
                }}>{i + 1}</button>);
        }
        setPagination(newPagination);
    }, []);

  return (
    <div class="meals-container">
        <h1><span className='principal-word'>A special day, </span>do your best</h1>
        <h1>select your favorite dishes for your menu</h1>
    <div className='categories'>
            {categories.map(category => (
                <button onClick={ ()=> handleOnClickItem(category.strCategory)} className='btn-category'>
                    <div className='category' key={category.idCategory}>
                    <img width='60px' src={category.strCategoryThumb} alt="Not exist" />
                    <h6>{category.strCategory}</h6>
                </div>
                </button>
            ))}
    </div>
    <div className='meals'>
          <button className="button-scroll1" onClick={() => (page === 0 ? null : setPage(page - 1))}><ion-icon className='icon' name="chevron-back-outline"></ion-icon></button>
                {filtered.slice(page * 4, (page + 1) * 4).map((key) => 
                        <div className="cardmeal1">
                            <Heart recip={filtered} select={select} setSelect={setSelect} id={key.idMeal} meal={key.strMeal} img={key.strMealThumb}/>
                            <CardMedia className="img1" key={key.idMeal} 
                                component="img"
                                src={key.strMealThumb}
                                alt={key.strMeal}
                            />
                            <div className="content-text">
                                <h4 className="title-meal">{key.strMeal}</h4>
                            </div>
                        </div>
                )}
                <button id='btn-right' className="button-scroll" onClick={() => (page === 7 ? null : setPage(page + 1))}><ion-icon className='icon' name="chevron-forward-outline"></ion-icon></button>
    </div>
    <h1>Recipes from your special menu </h1>
    <div>
        {/*<button className='btn' onClick={handleOnClick}>Printer select</button>*/}
    </div>
    <MealsMenu recip={select} setSelect={setSelect}/>
    {print ? <MenuPrint select={select} /> : null}
  </div>
)
} 
  

export default MenuHeader
import React from 'react'
import image from '././plato.png'
import '././Header.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const navigateToMeals = () => {
    navigate('/Meals');
  };

  return (
    <div className='header3'>
      <div className='left-container'>
        <div className='title'>
          <h1 className='title-header'><span className='principal-word'>No more excuses, </span>make the best</h1>
          <h1 className='title-header'>dishes with us</h1>
        </div>
        <p className='p'>At Eat&Repeat you will find the best dishes. You can search recipes from all around the world, either by categories, countries or ingredients.</p>
        <button onClick={navigateToMeals} className='btn'>¡Let's Go!</button>
      </div>
      <img className='principal-img' src={image} alt="food"></img>
    </div>
  )
}

export default Header
import React from 'react'
import './HeaderYourMenu.css'
import background from './food3.jpg'

const HeaderYourMenu = () => {
  return (
    <div className='header-meals' style={{ backgroundImage: `url(${background})`}}>
        <div className='overlay'>
        <h1 className='title-container'>A special day, do your best<br/>select your favorite dishes for your menu</h1>
        </div>
    </div>
  )
}

export default HeaderYourMenu
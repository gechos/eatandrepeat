import React from 'react'
import './mealsheader.css'
import background from './food3.jpg'

const Mealsheader = () => {
  return (
    <div className='header-meals' style={{ backgroundImage: `url(${background})`}}>
        <div className='overlay'>
        <h1 className='title-container'>Meals</h1>
        </div>
    </div>
  )
}

export default Mealsheader
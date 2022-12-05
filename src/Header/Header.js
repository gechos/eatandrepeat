import React from 'react'
import image from '././plato.png'
import '././Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='left-container'>
            <div className='title'>
            <h1><span className='principal-word'>Ahora </span>ya no tienes excusa para</h1>
            <h1>preparar los mejores platos</h1>
            </div>
            <p className='p'>Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit amet</p>
            <button className='btn'>¡Vamos!</button>
        </div>
        <div>
            <img className='principal-img' width="500" src={image} alt="comida"></img>
        </div>
    </div>
  )
}

export default Header
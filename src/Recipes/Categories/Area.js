import React from 'react'
import globe from './globe.png'
import './Category.css'
import Letters from './Letters.css'
import { useState } from 'react'

const Area = () => {
    return (
        <div className='category'>
            <button className='category clickable2'>
            <img width='35px' src={globe} alt="Not exist" />
            <h6>For Country</h6>
            </button>
        </div>
    )
}

export default Area
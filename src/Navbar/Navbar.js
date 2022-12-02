import React from 'react'
import {Link} from 'react-router-dom';
import '././Navbar.css';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <h3>Eat and Repeat</h3>
        </div>
        <div className='nav-right'>
        <div className='nav-links'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/recetas">Meals</Link>
                <Link className='link' to="/tumenu">Your menu</Link>
        </div>
        <Search/>
        </div>
    </div>
  )
}

export default Navbar
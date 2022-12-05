import {Link} from 'react-router-dom';
import '././Navbar.css';
import Search from './Search';
import logo from '././logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='logo-img' width='120' src={logo}/>
        </div>
        <div className='nav-right'>
        <div className='nav-links'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/Recipes">Meals</Link>
                <Link className='link' to="/YourMenu">Your menu</Link>
        </div>
        <Search/>
        </div>
    </div>
  )
}

export default Navbar
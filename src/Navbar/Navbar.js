import { Link } from 'react-router-dom';
import '././Navbar.css';
import Search from './Search';
import logo from '././logo.png';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BtnSignUp from './BtnSignUp';

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img onClick={navigateToHome} className='logo-img' width='120' src={logo} />
      </div>
      <div className='nav-right'>
        <div className='nav-links'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/Meals">Meals</Link>
          <Link className='link' to="/YourMenu">Your menu</Link>
        </div>
        <Search />
        <BtnSignUp />
      </div>
    </div>
  )
}

export default Navbar
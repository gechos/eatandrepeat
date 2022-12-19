import CardMedia from '@mui/material/CardMedia';
import './Heart.css';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './cardMenu.css'

const MealsMenu = ({ recip, setSelect }) => {
  let menu = [...recip]

  //handle the click
  const OnClickHeart = (id) => {
    console.log(id, menu);
    menu = menu.filter(menu => menu[0] !== `${id}`);
    setSelect(menu);
  }

  return (
    <div className='meals1'>
      {recip.map((key) =>
        <div className="cardmeal1">
          <>
            <Link to="/CompleteRecipe" state={{ id: `${key[0]}` }}>
              <CardMedia className="img1" key={key[0]}
                component="img"
                src={key[2]}
                alt={key[1]}
              />
              <div className="content-text1">
                <h4 className="title-meal1">{key[1]}</h4>
                <div onClick={() => OnClickHeart(key[0])}>
                <FaHeart className='heart' />
              </div>
              </div>
            </Link>
          </>
        </div>
      )}
    </div>
  )
}

export default MealsMenu;

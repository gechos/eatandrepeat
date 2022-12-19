import CardMedia from '@mui/material/CardMedia';
import './Heart.css';
import { FaHeart} from 'react-icons/fa';

const MealsMenu = ({recip, setSelect}) => {
    let menu=[...recip]
  
  //handle the click
  const OnClickHeart = (id) => {
    console.log(id,menu);
    menu = menu.filter(menu => menu[0] !== `${id}`);        
    setSelect(menu);
  }
 
  return (
      <div className='meals'>
          {recip.map((key) => 
                <div className="cardmeal">
                <div onClick={() => OnClickHeart(key[0])}>
                <FaHeart className='heart' />
                </div>
                <CardMedia className="img" key={key[0]}  
                                component="img"
                                src={key[2]}
                                alt={key[1]} 
                            />
                <div className="content-text">
                       <h4 className="title-meal">{key[1]}</h4>
                </div>
                </div>
              )}
        </div> 
)
}
      
export default MealsMenu;

import CardMenu from "./CardMenu";
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
                <CardMenu className="meal"
                    key={key[0]} 
                    img={key[2]} 
                    meal={key[1]} 
                    />
                </div>
               
              )}
        </div> 
)
}
      
export default MealsMenu;

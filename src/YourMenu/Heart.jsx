import { useEffect,useState } from 'react';
import './Heart.css';
import { FaHeart} from 'react-icons/fa'
import { FaRegHeart} from 'react-icons/fa'

let menu=[];
const Heart = ({id,meal,img, setSelect, filtered,select}) => {
 
 const [liked, setLiked]=useState(false);
  menu=[...select];
  //handle the click
  const OnClickHeart = () => {
    liked ? setLiked(false):setLiked(true);
    menu = [...menu,[`${id}`, `${meal}`, `${img}`]] ;                 
    setSelect(menu);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLiked(false)
    }, 1000);
    return () => clearInterval(interval);
  }
)
  return (
    <div onClick={() => OnClickHeart()}>
      {liked === true ? <FaHeart className='heart' /> : <FaRegHeart className='heart'/>}
    </div>
      
    )
}
export  {Heart};

import '././card.css'
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom';



export default function MediaCard(props) {
    return (
         
        <>
        <Link to="/CompleteRecipe" state={{id: `${props.id}`}}>
        <div className="cardmeal">
            <CardMedia className="img"
                component="img"
                height="140"
                src={props.img}
                alt={props.meal}
            />
            <div className="content-text">
                <h4 className="title-meal">{props.meal}</h4>
                <p className="paragraph">{props.description}</p>
            </div>
        </div>
        </Link>
        </>
        
        
         
    );
}

/* function Card(props) {
    return (
        <div className="cardmeal">
            <p>
                <div className="img">
                <img src={props.img}></img>
                </div>
                <br />
                <p><b>{props.meal}</b></p>
                <p className="p">{props.description}</p>
            </p>
            <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
        </div>
    );
}
export default Card; */


import CardMedia from '@mui/material/CardMedia';
import {Heart} from './Heart';
import './cardMenu.css'


export default function CardMenu({id, meal, img}) {
    return (
        <div className="cardmeal">
            
            <CardMedia className="img"
                component="img"
                
                src={img}
                alt={meal}
            />
            <div className="content-text">
                <h4 className="title-meal">{meal}</h4>
            </div>
        </div>
    );
}

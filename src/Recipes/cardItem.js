import axios from "axios";
import { useEffect, useState } from 'react';
import './card.css'
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';


export default function MediaCard(props) {
    return (
        <div className="cardmeal">
            <CardMedia className="img"
                component="img"
                height="140"
                src={props.img}
                alt={props.meal}
            />
            <div className="content-text">
                <h4>{props.meal}</h4>
                <p className="paragraph">{props.description}</p>
            </div>
        </div>
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


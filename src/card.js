import axios from "axios";
import { useEffect, useState } from 'react';

function Card(props) {
    return (
        <div>
            <p>
                <img width="200" src={props.img}></img>
                <br/>
                <b>Name: </b>{props.meal}
                <br/>
                <b>Description: </b>{props.description}
            </p>
        </div>
    );
}

export default Card;
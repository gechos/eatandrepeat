import {useState} from 'react';
import './PopUp.css';

function PopUp(props) {


    
    return (
        <div className='popup'>
                <><button className="closeBtn" onClick={props.close}>x</button></>
                <img width="200" src={props.img}></img>
                <br/>
                <b>Name: </b> {props.meal}
                <br/>
                <b>Description: </b>{props.description}        
                </div>
    )

}

export default PopUp;
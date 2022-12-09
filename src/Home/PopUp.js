import {useState} from 'react';
import './PopUp.css';

function PopUp(props) {


    
    return (
        <div className='popup'>
                <><button className="closeBtn" onClick={props.close}>x</button></>
                <img className="img" src={props.img}></img>
                <br/>
                <b>{props.meal}</b>
                <br/>
                <><button className="btn">Details</button></>        
                </div>
    )

}

export default PopUp;
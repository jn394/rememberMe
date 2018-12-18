import React from 'react';
import './Card.css'


const Card = props => (
    <div id={props.id} className="tile" onClick={()=>props.gameLogic(props.name)}>
        <img alt={props.name} src={props.image} />
    </div>
)

export default Card;
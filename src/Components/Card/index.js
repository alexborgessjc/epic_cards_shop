import React from 'react';

function Card({type, image, name}){
    return(
        <div className='item-card'>
            <img src={image} className="item-card-photo" alt="Foto da carta"/>
            <span className='item-cad-name'>{name}</span>
            <span>{type}</span>
        </div>
    );
}

export default Card;
import React from 'react';
import './Item.css';

const Item = props => {
    return (
        <div className='item' onClick={props.onAdd}>
            <div className='item__img-body'>
                <img src={props.img} alt={props.name} />
            </div>
            <div className='item__text'>
                <h3 className='item__name'>{props.name}</h3>
                <p className='item__price'>Price: {props.price} KGS</p>
            </div>
        </div>
    );
};

export default Item;
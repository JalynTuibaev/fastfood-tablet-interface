import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
    return (
        <div className='orderItem'>
            <h4 className='orderItem__name'>{props.name}</h4>
            <p className='orderItem__text'>x{props.count}</p>
            <p className='orderItem__text'>{props.price} KGS</p>
            <button className='btn' onClick={props.OnDel}>Delete</button>
        </div>
    );
};

export default OrderItem;
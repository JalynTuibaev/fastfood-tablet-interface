import React from 'react';
import OrderItem from "../OrderItem/OrderItem";
import './Order.css';
import {nanoid} from "nanoid";

const Order = props => {
    const render = props.menu.map((item, index) => {
       if (item.count > 0) {
           return (
               <OrderItem
                   name={item.name}
                   count={item.count}
                   price={props.MENU[index].price}
                   key={nanoid()}
                   OnDel={() => props.OnDel(index)}
               />
           );
       }
    });

    return (
        <fieldset className='fieldset'>
            <legend>Order details: </legend>
            <div className='order'>
                {render}
            </div>
        </fieldset>
    );
};

export default Order;
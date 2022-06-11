import React from 'react';
import OrderItem from "../OrderItem/OrderItem";
import Total from "../Total/Total";
import {nanoid} from "nanoid";
import './Order.css';

const Order = props => {
    let num = 0;
    const render = props.menu.map((item, index) => {
        num += item.count;
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
       return ' ';
    });

    const text = () => {
        if (num === 0) {
            return 'Order is empty! Please add some items';
        }
    }

    return (
        <fieldset className='fieldset-order'>
            <legend>Order details: </legend>
            <div className='order'>
                {text()}
                {render}
                {num > 0 ? <Total total={props.total} /> : ''}
            </div>
        </fieldset>
    );
};

export default Order;
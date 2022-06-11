import React from 'react';
import Item from "../Item/Item";
import './Menu.css';

const Menu = props => {
    const render = props.menu.map((item, index) => {
       return (
           <Item
               img={item.image}
               name={item.name}
               price={item.price}
               key={index}
               count={props.count[index].count}
           />
       );
    });

    return (
        <>
            <fieldset>
                <legend>Add items:</legend>
                <div className='menu'>
                    {render}
                </div>
            </fieldset>
        </>
    );
};

export default Menu;
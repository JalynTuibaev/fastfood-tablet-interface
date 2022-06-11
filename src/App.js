import React, {useState} from "react";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import cheeseburgerImage from './assets/cheeseburger.png';
import teaImage from './assets/tea.png';
import coffeeImage from './assets/coffee.png';
import colaImage from './assets/cola.png';
import friesImage from './assets/fried-potatoes.png';
import hamburgerImage from './assets/hamburger.png';
import './App.css';

const MENU = [
    {name: 'Hamburger', price: 80, image: hamburgerImage},
    {name: 'Cheeseburger', price: 90, image: cheeseburgerImage},
    {name: 'Fries', price: 45, image: friesImage},
    {name: 'Coffee', price: 70, image: coffeeImage},
    {name: 'Tea', price: 50, image: teaImage},
    {name: 'Cola', price: 40, image: colaImage}
];

const App = () => {
    const [menu, setMenu] = useState([
        {name: 'Hamburger', count: 0},
        {name: 'Cheeseburger', count: 0},
        {name: 'Fries', count: 0},
        {name: 'Coffee', count: 0},
        {name: 'Tea', count: 0},
        {name: 'Cola', count: 0}
    ]);

    const add = index => {
        const menuCopy = menu.map((item, i) => {
           if (index === i) {
               return {
                    ...item,
                   count: item.count +1
               };
           }
           return item;
        });

        setMenu(menuCopy);
    };

    const del = index => {
        const menuCopy = menu.map((item, i) => {
            if (index === i) {
                return {
                    ...item,
                    count: item.count - 1
                };
            }
            return item;
        });

        setMenu(menuCopy);
    };

    const total = () => {
        let sum = 0;
        for (let i = 0; i < menu.length; i++) {
            sum += MENU[i].price * menu[i].count;
        }
        return sum;
    };


    return (
        <div className='container'>
            <Menu menu={MENU} count={menu} OnAdd={(index) => add(index)} />
            <Order menu={menu} MENU={MENU} OnDel={(index) => del(index)} total={total()} />
        </div>
    );
};

export default App;

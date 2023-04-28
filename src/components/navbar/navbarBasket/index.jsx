"use client"
import {useSelector} from 'react-redux';

const NavbarBasket = () => {
    const {cards} = useSelector(state => state.cards)
    return (
        <div className="absolute bg-red-400 rounded-full -top-3 -right-3 w-5 h-5 text-white flex items-center justify-center">{cards.length}</div>
    );
};

export default NavbarBasket;

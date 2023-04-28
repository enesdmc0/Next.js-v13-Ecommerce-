import {BiSearch} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import {SlBasket} from "react-icons/sl"
import NavbarBasket from '@/components/navbar/navbarBasket';
import Link from 'next/link';
const NavbarRight = () => {

    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center p-3 rounded-full bg-gray-200 ">
                <input className="bg-transparent outline-none" type="text" placeholder="Arama Yapınız..." />
                <BiSearch size={25}/>
            </div>
            <AiOutlineHeart size={25}/>
            <Link href="/card" className="relative ">
                <NavbarBasket/>
                <SlBasket size={25}/>
            </Link>
        </div>
    );
};

export default NavbarRight;

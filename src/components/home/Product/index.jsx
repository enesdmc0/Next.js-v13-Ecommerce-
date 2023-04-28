import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Product = ({image, price, title, id}) => {
    return (
        <Link href={`/products/${id}`} className="w-[300px] border relative bg-white cursor-pointer">
            <div className="relative w-[200px] h-[200px] m-auto">
                <Image className="object-cover " fill src={image} alt=""/>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white text-xl p-2 m-3 rounded-xl">{price} TL</div>
            <div className="p-2 font-bold">{title}</div>
        </Link>
    );
};

export default Product;

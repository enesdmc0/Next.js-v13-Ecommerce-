"use client"
import React from 'react';
import Image from 'next/image';
import {deleteProduct} from '@/redux/cardSlice';
import {useDispatch} from 'react-redux';

const CardComp = ({item}) => {
    const dispatch = useDispatch()
    const handleClick = async (id) => {
        await dispatch(deleteProduct({id}))
    }
    return (
        <div className="flex gap-3 border rounded p-3 items-center justify-between">
            <div className="relative w-32 h-32">
                <Image src={item.image} fill className="object-cover" alt=""/>
            </div>
            <div className="text-xl font-bold w-24">{item.title}</div>
            <div className="font-bold">{item.price} TL</div>
            <div>{item.quantity} Adet</div>
            <div className="font-bold">Toplam: {item.price * item.quantity}</div>
            <button onClick={() => handleClick(item.id)} className="border p-2 bg-gray-100">Sil</button>
        </div>
    );
};

export default CardComp;

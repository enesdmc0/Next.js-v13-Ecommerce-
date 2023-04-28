"use client"
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {total} from '@/redux/cardSlice';

const Payment = () => {
    const {cards, basketPrice, basketLength} = useSelector(state => state.cards)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(total())
    }, [cards])
    return (
        <div className="w-80 border p-5 flex gap-5 flex-col text-xl font-bold">
            <div>Adet: {basketLength} Adet</div>
            <div>Kargo: 10 TL</div>
            <div>Toplam: {basketPrice + 10} TL</div>
            <button className="border rounded-full px-5 py-3 w-full bg-gray-100">Ödeme Yap</button>
        </div>
    );
};

export default Payment;

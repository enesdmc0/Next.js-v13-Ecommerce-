"use client"
import {useEffect} from 'react';
import CardComp from '@/components/card/CardComp';
import {clearCard} from '@/redux/cardSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/navigation';

const CardProducts = () => {
    const {cards} = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleClick = async () => {
        await dispatch(clearCard())
        router.push("/")

    }


    return (
        <div className="flex-1 flex flex-col gap-3">
            <button className="border bg-gray-100 p-3 font-bold" onClick={handleClick}>Sepeti Temizle</button>
            {
                cards.length === 0
                    ? <div className="font-bold text-2xl border p-3 bg-gray-100">Sepetinizde Ürün Bulunmamaktadır.</div>
                    : cards?.map(item => (
                        <CardComp key={item.id} item={item} />
                    ))
            }
        </div>
    );
};

export default CardProducts;

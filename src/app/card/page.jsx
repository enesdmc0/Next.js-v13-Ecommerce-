"use client"
import {useEffect} from "react"
import CardComp from "src/components/cardComp"
import {useSelector, useDispatch} from 'react-redux';
import {clearCard, total} from '@/redux/cardSlice';
import {useRouter} from 'next/navigation';

const Card =  () => {
    const {cards, basketPrice, basketLength} = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleClick = async () => {
        await dispatch(clearCard())
        router.push("/")
    }
    useEffect(() => {
        dispatch(total())
    }, [cards])
    return (
        <div className="flex gap-2">
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
            <div className="w-80 border p-5 flex gap-5 flex-col text-xl font-bold">
                <div>Adet: {basketLength} Adet</div>
                <div>Kargo: 10 TL</div>
                <div>Toplam: {basketPrice + 10} TL</div>
                <button className="border rounded-full px-5 py-3 w-full bg-gray-100">Ödeme Yap</button>
            </div>
        </div>
    );
};

export default Card;

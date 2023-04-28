"use client"
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import Image from 'next/image';
import {addToCard} from '@/redux/cardSlice';
import {useRouter} from 'next/navigation';

const ProductDetail = ({productDetail}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)



    const handleDec = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1)
        }
    }
    const handleInc = () => {
        if (productDetail?.rating?.count > quantity) {
            setQuantity(prev => prev + 1)
        }
    }

    const handleAdd = async() => {
        await dispatch(addToCard({quantity: quantity,
            image: productDetail.image,
            title: productDetail.title,
            id: productDetail.id,
            price:productDetail.price,
            totalPrice: quantity * productDetail.price
        }))

        router.back("/")

    }
    return (
        <div className="flex gap-10">
            <div className="relative w-[500px] h-[500px] flex-1">
                <Image className="object-cover " fill src={productDetail?.image} alt=""/>
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <div className="text-2xl font-bold">{productDetail?.title}</div>
                <div className="">{productDetail?.description}</div>
                <div className="">
                    <div className="text-red-400">Rating:    {productDetail?.rating?.rate}</div>
                    <div className="text-red-400">Count:    {productDetail?.rating?.count}</div>
                </div>
                <div className="flex gap-10">
                    <div onClick={handleDec} className="font-bold border px-5 py-2 border-black bg-gray-100 flex items-center justify-center cursor-pointer">-</div>
                    <div className="flex outline-none w-10 items-center justify-center font-bold">{quantity}</div>
                    <div onClick={handleInc} className="font-bold border px-5 py-2 border-black bg-gray-100 flex items-center justify-center cursor-pointer">+</div>
                </div>
                <button onClick={handleAdd} className="border rounded-full  p-3 border-black font-bold bg-gray-100">SEPETE EKLE</button>
            </div>
        </div>
    );
};

export default ProductDetail;

import {configureStore} from '@reduxjs/toolkit';
import categorySlice from "@/redux/categorySlice";
import productsSlice from "@/redux/productsSlice";
import cardSlice from '@/redux/cardSlice';


export function createStore(preloadedState = {}){
    const store = configureStore({
        reducer: {
            categories : categorySlice,
            products: productsSlice,
            cards: cardSlice,
        },
        preloadedState
    });
    return store
}



export const  store = createStore();

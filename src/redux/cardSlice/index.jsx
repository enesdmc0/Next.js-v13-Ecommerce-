import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    cards: [],
    basketPrice: 0,
    basketLength: 0
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addToCard: (state, action) => {
                state.cards = [...state.cards, action.payload]
        },
        clearCard: (state) => {
            state.cards = [];
        },
        deleteProduct: (state, action) => {
            const filtered = state.cards.filter(product => product.id !== action.payload.id)
            state.cards = filtered
            console.log(action.payload.id, "state.carddan gliyorum")
        },
        total: (state) => {
            const totalPri = state.cards.map(item => item.totalPrice)
            const total = totalPri.reduce((acc, curr) => acc + curr , 0)
            state.basketPrice = total
            const totalPro = state.cards.map(item => item.quantity);
            const totalLength = totalPro.reduce((acc, curr) => acc + curr, 0);
            state.basketLength = totalLength
        }
    }
});

export const {addToCard, clearCard, deleteProduct, total} = cardSlice.actions;
export default cardSlice.reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    activeCategory : ""
}

export const getCategories = createAsyncThunk("category", async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = await response.json();
    return data;
})

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        selectCategory : (state, action) => {
            state.activeCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    }
})

export default categorySlice.reducer;
export const {selectCategory} = categorySlice.actions
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {STATUS} from "@/utils/STATUS";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: {},
    productDetailStatus: STATUS.IDLE,
    sort: ""
};

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    return data;
});

export const getProductDetail = createAsyncThunk("getProductDetail", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortChange : (state, action) => {
            state.sort = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL;
            })
            .addCase(getProductDetail.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.productDetailStatus = STATUS.FAIL;
            })

    }
});

export default productsSlice.reducer;
export const {sortChange} = productsSlice.actions;
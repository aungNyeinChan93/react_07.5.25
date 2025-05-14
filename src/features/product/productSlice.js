import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    products: [
        { name: 'p-1', id: 1, price: 4000 },
        { name: 'p-2', id: 2, price: 200 },
        { name: 'p-3', id: 3, price: 4000 },
        { name: 'p-4', id: 4, price: 400000 },
    ],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        createProduct: (state, action) => {
            // state.products.push(action.payload);
            action?.payload?.name
                ? state.products = [...state.products, action.payload]
                : null

        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(p => p.id !== Number(action.payload))
        }

    }

});

export const { createProduct, removeProduct } = productSlice.actions

export default productSlice;
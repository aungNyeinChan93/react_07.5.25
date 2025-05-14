import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice';
import productSlice from './features/product/productSlice';

const { reducer: counterReducer, actions } = counterSlice;
const { reducer: productReducer } = productSlice;

const store = configureStore({
    reducer: {
        counterReducer,
        productReducer
    },

})

export default store;
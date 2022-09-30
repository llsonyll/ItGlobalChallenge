import { configureStore } from "@reduxjs/toolkit";
import cartReducerSlice from "./reducers/cartReducer.slice";
import itemsReducerSlice from "./reducers/itemsReducer.slice";

const store = configureStore({
    reducer: {
        cart: cartReducerSlice,
        items: itemsReducerSlice
    },
});

export default store;
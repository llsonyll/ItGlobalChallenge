import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const authReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const alreadyOnCart = state.cart.find(i => i === action.payload.id);
            if (!!alreadyOnCart) return;
            state.cart = [...state.cart, action.payload]
        },
        removeItemFromCart(state, action) {
            state.cart = state.card.filter(i => i !== action.payload)
        },
        restartCart(state, action) {
            state.cart = []
        }
    },
})

export const {
    addItemToCart,
    removeItemFromCart,
    restartCart
} = authReducer.actions

export default authReducer.reducer

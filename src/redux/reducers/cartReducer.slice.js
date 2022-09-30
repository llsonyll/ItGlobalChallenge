import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    showCardModal: false,
}

const authReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.cart = [...state.cart, action.payload]
        },
        removeItemFromCart(state, action) {
            state.cart = state.cart.filter(i => i.id !== action.payload)
        },
        restartCart(state, action) {
            state.cart = []
        },
        toggleCardState(state, action) {
            state.showCardModal = action.payload;
        }
    },
})

export const {
    addItemToCart,
    removeItemFromCart,
    restartCart,
    toggleCardState
} = authReducer.actions

export default authReducer.reducer

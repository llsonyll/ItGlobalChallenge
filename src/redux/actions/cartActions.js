import { addItemToCart, removeItemFromCart, restartCart, toggleCardState } from "../reducers/cartReducer.slice";

export const addItem = (item) => async (dispatch) => {
    dispatch(addItemToCart(item));
};

export const removeItem = (id) => async (dispatch) => {
    dispatch(removeItemFromCart(id));
};

export const resetCart = () => async (dispatch) => {
    dispatch(restartCart())
}

export const toggleCartModalState = (state) => async (dispatch) => {
    dispatch(toggleCardState(state))
}

import { addItemToCart, removeItemFromCart, restartCart } from "../reducers/cartReducer.slice";

export const addItem = (item) => async (dispatch) => {
    dispatch(addItemToCart(item));
};

export const removeItem = (id) => async (dispatch) => {
    dispatch(removeItemFromCart(id));
};

export const resetCart = () => async (dispatch) => {
    dispatch(restartCart())
}

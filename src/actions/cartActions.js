
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (cartItem) => (dispatch) => {
    dispatch({type: CART_ADD_ITEM, payload: cartItem})
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
}

export const changeQty = (cartItem) => (dispatch) => {

}

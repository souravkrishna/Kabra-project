import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

 const cartReducer = (state = { cartItems : [] }, action) => {
    switch(action.type)
    {
        case CART_ADD_ITEM:
            const item = action.payload;  
            const existsItem = state.cartItems.find(x => x.id === item.id);
            if(existsItem)
            {
                return{
                    ...state,
                    cartItems: state.cartItems.map((x) => 
                    x.id === existsItem.id ? item : x
                    )
                }
            }
            else
            {
                return { ...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
             return {
                 ...state,
                 cartItems: state.cartItems.filter((x) => x.id !== action.payload)
             }
        default:
            return state;
    }
}
export default cartReducer
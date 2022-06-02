import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import productListReducer from './Reducer/productReducers';
import cartReducer from './Reducer/cartReducers';


const inistialstate ={productList: {products: []},cartList: {cartItems: []}}

const reducer = combineReducers({
    productList:productListReducer,
    cartList: cartReducer
});

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;
const store = createStore (reducer,inistialstate,composeEnhancer(applyMiddleware(thunk)));

export default store

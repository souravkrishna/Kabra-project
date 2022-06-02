
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../actions/cartActions";
import AlertMessage from '../components/ALertMessage';
import { Link } from 'react-router-dom';

export default function Cart(props){
    const { cartItems } = useSelector((state) => state.cartList);

    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    return(
        <div className="row top">
            <div className="col-2">
                {
                cartItems.length === 0 ? 
                    <AlertMessage>Cart is Empty. <Link to="/">Shop now</Link>
                    </AlertMessage>
                :
                (
                    <ul>
                        {
                            cartItems.map((item) => (
                                <li key={item.id}>
                                    <div className="row">
                                        <div>
                                            <img src={item.filename} alt={item.title} className="small"></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.id}`}>{item.title}</Link>
                                        </div>
                                        <div>
                                            <select 
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart({id: item.id, qty: Number(e.target.value), price: item.price, title: item.title, filename: item.filename}))}>
                                                {[...Array(10).keys()].map((x) => (
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ))
                                                }    
                                            </select>
                                        </div>
                                        <div>{item.price}</div>
                                        <div><button type="button" onClick={() => removeFromCartHandler(item.id)}>Remove</button></div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : 
                                ₹ {cartItems.reduce((a, c) => (a +  c.price * c.qty), 0).toFixed(2)}
                            </h2>
                        </li>
                        <li>
                            <button 
                                type="button"
                                className="primary block" 
                                disabled={cartItems.length === 0}>
                                    Proceed to Checkout
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
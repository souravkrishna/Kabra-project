
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Rating from '@mui/material/Rating';

export default function Product({ product }) {
const dispatch = useDispatch();

  return (
    <div className="card" style={{height: "625px", width: "290px", backgroundColor:"#F5F5DC"}}>
        <div style={{width: "100%", display: "flex"}}>
          <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px"}}>
        <img className="medium" src={product.filename} alt="product"/>
        </div>
        </div>
      <div className="card-body">
         <div className="titlediv"> <h2>{product.title}</h2></div>
        <div className='description'>
          <p className="description">{product.description}
          <p>{`Type : ${product.type}`}</p></p>
          </div>
          <br/>
        <Rating name="size-large" defaultValue={product.rating} size="large" readOnly />
        <div className="price">{`₹ ${product.price}`}</div>
        <button className="primary block" onClick={() => {dispatch(addToCart({id: product.id, qty: 1, price: product.price, title: product.title, filename: product.filename}))}}>Add to cart</button>
      </div>
    </div>
  );
}

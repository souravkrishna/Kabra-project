import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingMessage from '../components/LoadingMessage';
import AlertMessage from '../components/ALertMessage';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/ProductActions'

export default function HomePage()
{
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return(
        <div>
            { loading ? (<LoadingMessage></LoadingMessage>)
            : error ? (<AlertMessage variant="danger">{error}</AlertMessage>)
            : ( <div className="row center">
                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>  
                    ))}
                </div>)
            }
        </div>
    );
}
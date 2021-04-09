import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useState } from 'react';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('https://tranquil-springs-53498.herokuapp.com/product/' + productKey)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [productKey])

    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;

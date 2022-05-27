import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const ProductPage = () => {
    const {productId} = useParams();
    // const {data: product, isLoading} = useQuery('product', () => fetch(`http://localhost:5000/item/${productId}`).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    
    return (
        <div className='container mx-auto'>
            <h2>You are purchasing {productId}</h2>
        </div>
    );
};

export default ProductPage;
import React from 'react';

const Question5 = () => {
    return (
        <div>
            <h4 className="text-xl text-slate-600 font-bold mb-6">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
            <p>I can use ES6 find() method on the array of products to find a product by its name. The code syntax can be like the below to find a product by name.</p>
            <div className="">
                <p>const product = products.find( product {'=>'} product.name.includes('product name')); or</p>
                <p>const product = products.find( product {'=>'} product.name === 'exact product name');</p>
            </div>
            <p>For example: </p>
            <div className="">
                <p>const products = [ </p>
                <p className='ml-5'>{`{name: 'a', description: 'description of a', price: 1},`}</p>
                <p className='ml-5'>{`{name: 'b', description: 'description of b', price: 2},`}</p>
                <p className='ml-5'>{`{name: 'c', description: 'description of c', price: 3}`}</p>
                <p>];</p>
                <p>{`const product = products.find(product => product.name.includes('b'));`} or</p>
                <p>{`const product = products.find(product => product.name === 'b');`}</p>
                <p>console.log(product); <span className=' text-slate-500'>{`// Output should be: {name: 'b', description: 'description of b', price: 2}`}</span></p>
            </div>
        </div>
    );
};

export default Question5;
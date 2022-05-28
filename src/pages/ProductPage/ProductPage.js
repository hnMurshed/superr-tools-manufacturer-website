import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading/Loading';
import ShippmentModal from './ShippmentModal';

const ProductPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(50);
    const { productId } = useParams();
    const { data: product, isLoading } = useQuery('product', () => fetch(`http://localhost:5000/tool/${productId}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    };

    const { name, description, img, stock, price, category, _id } = product;

    return (
        <section className='custom-container flex gap-6 py-10'>
            <div className="basis-1/2">
                <img src={img} alt={name} />
            </div>
            <div className="basis-1/2">
                <h2 className='text-4xl font-bold'>{name}</h2>
                <div class="divider"></div>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center">
                        <span className='text-3xl font-bold'>${price}</span>
                        <span className=' text-gray-400 mr-3'>/ Piece |</span>
                        <span>50 Pieces (<span className=' text-gray-400'>Min Order</span>)</span>
                    </div>
                    <span>{stock} Pieces in stock</span>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text text-2xl">Quantity</span>
                    </label>
                    <div class="flex">
                        <div onClick={() => {
                            if (quantity > 50) {
                                setQuantity(quantity - 1)
                            }
                            if (quantity === 50) {
                                toast.error('Order less than 50 is not possible')
                            }
                        }} className="w-12 bg-accent flex items-center justify-center rounded-l-md cursor-pointer">
                            <span className='text-4xl pb-2'>-</span>
                        </div>
                        <div className="w-20 flex items-center justify-center border border-gray-300">
                            <p class="text-3xl">{quantity}</p>
                        </div>
                        <div onClick={() => {
                            if (quantity < stock) {
                                setQuantity(quantity + 1)
                            }
                            if (quantity === stock) {
                                toast.error(`Stock is limited. Not possible to take order over ${stock}`)
                            }
                        }} className="w-12 bg-accent flex items-center justify-center rounded-r-md cursor-pointer">
                            <span className='text-4xl pb-2'>+</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button disabled={quantity > stock} className='w-full btn btn-secondary uppercase'>Add To Card</button>
                        <label onClick={ () => setModalOpen(true)} htmlFor='shipping-modal' disabled={quantity > stock} className='w-full btn btn-accent uppercase mt-3'>Buy It Now</label>
                    </div>
                    <div class="divider"></div>
                    <h3 className='text-3xl font-bold text-center uppercase'>Description</h3>
                    <p className='my-5'>{description}</p>
                    <p><strong>Category: </strong>{category}</p>
                </div>
            </div>
            {
                modalOpen && <ShippmentModal
                product={product}
                quantity={quantity}
                setModalOpen={setModalOpen}
            ></ShippmentModal>
            }
        </section>
    );
};

export default ProductPage;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data, event) => {
        fetch('https://mysterious-ravine-35179.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
                return res.json();
            })
            .then(data => {
                if (data.insertedId) {
                    toast.success('Product successfully added');
                    event.target.reset();
                }
                else {
                    toast.error('Failed to add')
                }
            })
    };
    // const { name, description, img, stock, price, category, _id } = product;
    return (
        <div>
            <h4 className='text-center text-2xl my-5'>Add a product</h4>
            <div className="w-full md:w-3/5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <input type='text' placeholder='Product Title*' className='w-full border p-2 rounded-md' {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} />
                        {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                    </div>
                    <div className='mb-3'>
                        <textarea type='text' placeholder='Write your product description here*' className='w-full border p-2 rounded-md h-20' {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            }
                        })} />
                        {errors.description?.type === 'required' && <p className='text-red-400'>{errors.description.message}</p>}
                    </div>
                    <div className='mb-3'>
                        <select className="w-full border p-2 rounded-md" {...register("category", {
                            required: {
                                value: true,
                                message: 'Please select category'
                            }
                        })}>
                            <option selected>Please select category</option>
                            <option value='Cutting Tools'>Cutting Tools</option>
                            <option value='Hand Tools'>Hand Tools</option>
                            <option value='Indastrial Tools'>Indastrial Tools</option>
                        </select>
                        {errors.category?.type === 'required' && <p className='text-red-400'>{errors.category.message}</p>}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className='mb-3 w-full'>
                            <input type='number' placeholder='Price*' className='w-full border p-2 rounded-md' {...register("price", {
                                required: {
                                    value: true,
                                    message: 'price is required'
                                }
                            })} />
                            {errors.price?.type === 'required' && <p className='text-red-400'>{errors.price.message}</p>}
                        </div>
                        <div className='mb-3 w-full'>
                            <input type='number' placeholder='Quantity' className='w-full border p-2 rounded-md' {...register("stock", {
                                required: {
                                    value: false,
                                    message: 'Quantiy is required'
                                }
                            })} />
                            {errors.stock?.type === 'required' && <p className='text-red-400'>{errors.stock.message}</p>}
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input placeholder='Product image URL*' className='w-full border p-2 rounded-md' {...register("img", {
                            required: {
                                value: true,
                                message: 'Image URL is required'
                            }
                        })} />
                        {errors.img?.type === 'required' && <p className='text-red-400'>{errors.img.message}</p>}
                    </div>

                    <div className="text-center">
                        <input type="submit" value='Add Product' className='btn btn-wide uppercase text-white bg-secondary border-0' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
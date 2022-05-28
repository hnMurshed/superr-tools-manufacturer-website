import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ShippmentModal = ({ product, quantity, setModalOpen, refetch }) => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { name, description, img, stock, price, category, _id } = product;

    const totalPrice = parseFloat(price) * parseInt(quantity);
    const onSubmit = data => {

        data.itemId = _id;
        data.item = name;
        data.itemQuantity = quantity;
        data.totalPrice = totalPrice;

        const updatedStock = stock - quantity;

        fetch('https://mysterious-ravine-35179.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    fetch(`https://mysterious-ravine-35179.herokuapp.com/tool/${_id}?updatedStock=${updatedStock}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch();
                    });
                    setModalOpen(false);
                    toast.success('Thans for your order');
                }
            })
    };
    return (
        <div>
            <input type="checkbox" id="shipping-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div style={{maxWidth: '64rem'}} className="modal-box w-10/12 md:w-1/2 relative">
                    <h4 className='text-center text-3xl font-bold mb-5'>Shipping Address</h4>
                    <label htmlFor="shipping-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="divider"></div>
                    <div className="flex items-center justify-between mb-3">
                        <h4 className='text-xl font-bold'>{name}</h4>
                        <p>
                            <span className='text-xl font-bold'>${price}</span>
                            <span className=' text-gray-400 mr-3'>/ Piece</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                        <span><strong>Quantity: </strong>{quantity}Pieces</span>
                        <span><strong>Total Price: </strong>$<span>{totalPrice}</span></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <input type='text' placeholder='Country/Region*' className='w-full border rounded-md p-3' {...register("country", {
                                required: {
                                    value: true,
                                    message: 'Country is required'
                                }
                            })} />
                            {errors.country?.type === 'required' && <p className='text-red-400'>{errors.country.message}</p>}
                        </div>
                        <div className="flex items-center gap-3">
                            <div className='w-full mb-3'>
                                <input type='text' placeholder='First Name*' className='w-full border rounded-md p-3' {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                                {errors.firstName?.type === 'required' && <p className='text-red-400'>{errors.firstName.message}</p>}
                            </div>
                            <div className='w-full mb-3'>
                                <input type='text' placeholder='Last Name' className='w-full border rounded-md p-3' {...register("lastName", {
                                    required: {
                                        value: false,
                                        message: 'Name is required'
                                    }
                                })} />
                                {errors.lastName?.type === 'required' && <p className='text-red-400'>{errors.lastName.message}</p>}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <input readOnly type='email' value={user?.email} className='w-full border rounded-md p-3' {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                }
                            })} />
                            {errors.address?.type === 'required' && <p className='text-red-400'>{errors.address.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder='Address*' className='w-full border rounded-md p-3' {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is required'
                                }
                            })} />
                            {errors.address?.type === 'required' && <p className='text-red-400'>{errors.address.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder='Appartment, suite, etc (optional)' className='w-full border rounded-md p-3' {...register("appartment", {
                                required: {
                                    value: false,
                                    message: 'Appartment is required'
                                }
                            })} />
                            {errors.appartment?.type === 'required' && <p className='text-red-400'>{errors.appartment.message}</p>}
                        </div>
                        <div className="flex items-center gap-3">
                            <div className='w-full mb-3'>
                                <input type='text' placeholder='City*' className='w-full border rounded-md p-3' {...register("city", {
                                    required: {
                                        value: true,
                                        message: 'City is required'
                                    }
                                })} />
                                {errors.city?.type === 'required' && <p className='text-red-400'>{errors.city.message}</p>}
                            </div>
                            <div className='w-full mb-3'>
                                <input type='text' placeholder='Postal Code' className='w-full border rounded-md p-3' {...register("postalCode", {
                                    required: {
                                        value: true,
                                        message: 'Postal Code is required'
                                    }
                                })} />
                                {errors.postalCode?.type === 'required' && <p className='text-red-400'>{errors.postalCode.message}</p>}
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value='Continue To Shipping' className='btn btn-wide uppercase text-white bg-black border-0' />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ShippmentModal;
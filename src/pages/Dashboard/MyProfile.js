import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';

const MyProfile = () => {
    const [edit, setEdit] = useState(false);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: userProfile, isLoading, refetch} = useQuery('user-profile', () => fetch('https://mysterious-ravine-35179.herokuapp.com/user-profile', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            navigate('/login');
        }
        return res.json();
    }));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(userProfile);

    const onSubmit = data => {
        console.log(data);

        fetch('https://mysterious-ravine-35179.herokuapp.com/user-profile', {
            method: 'PUT',
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
            console.log(data);
            if (data.acknowledged) {
                refetch();
                setEdit(false);
                toast.success('Successfully saved changes')
            }
        })

    };
    return (
        <div className=' shadow-xl m-4 p-5'>
            <div className="flex items-center justify-between">
                <h4 className='text-2xl font-bold'>My Profile</h4>
                <span onClick={() => setEdit(true)} className=' text-primary cursor-pointer'>Edit</span>
            </div>
            <div className="divider"></div>
            <div class=" flex items-start gap-6">
                <img className=' w-44 rounded-full' src={user.photoURL} alt='' />
                <div class="w-full">
                    <div className={`${edit ? 'hidden' : 'flex'} items-start gap-5`}>
                        <div>
                            <p className='font-bold mt-2'>Full Name</p>
                            <span>{userProfile ? userProfile.profile.name : user.displayName}</span>
                            <p className='font-bold mt-2'>Email Adress</p>
                            <span>{user.email}</span>
                            <p className='font-bold mt-2'>Phone</p>
                            <span>{userProfile ? userProfile.profile.phone : 'null'}</span>
                        </div>
                    </div>
                    <div className={`w-full ${edit ? 'block' : 'hidden'}`}>
                        {/* <input type="text" placeholder="Full Name" class="input input-bordered input-md w-full max-w-xs" /> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <label htmlFor="">Full Name</label>
                                <input type='text' placeholder='Full Name' className='w-full border p-2 rounded-md' {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                                {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="">Email Address <span className=' text-slate-400'><small>(Email address can not be changed)</small></span></label>
                                <input readOnly type='email' className='w-full border p-2 rounded-md' value={user.email} {...register("email", {
                                    required: {
                                        value: false,
                                        message: 'email is required'
                                    }
                                })} />
                                {errors.email?.type === 'required' && <p className='text-red-400'>{errors.email.message}</p>}
                            </div>
                            <div className='mb-3 w-full'>
                                <label htmlFor="">Phone Number</label>
                                <input type='number' placeholder='Phone' className='w-full border p-2 rounded-md' {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is required'
                                    }
                                })} />
                                {errors.phone?.type === 'required' && <p className='text-red-400'>{errors.phone.message}</p>}
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <button onClick={() => setEdit(false)} className='btn btn-outline btn-ghost'>Cancel</button>
                                <input type="submit" value='Save Changes' className='btn uppercase text-white btn-secondary border-0' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
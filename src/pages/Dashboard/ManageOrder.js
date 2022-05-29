import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';

const ManageOrder = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { data: orders, isLoading } = useQuery('allorders', () => fetch(`http://localhost:5000/allorders`, {
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
    };

    console.log(orders);
    return (
        <div>
            <h4 className='text-center text-2xl'>Manage Orders: {orders.length}</h4>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Orderer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td className='capitalize'>{order.firstName}</td>
                                <td>{order.item}</td>
                                <td>{order.itemQuantity} Pieces</td>
                                <td>${order.totalPrice}</td>
                                <td>{'Pending'}</td>
                                <td>
                                    <button class="btn btn-secondary btn-sm mr-2">Mark Completed</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;
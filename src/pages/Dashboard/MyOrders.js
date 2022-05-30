import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelOrder from '../shared/CancelOrder/CancelOrder';
import Loading from '../shared/Loading/Loading';

const MyOrders = () => {
    const [cancelOrder, setCancelOrder] = useState(null);

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://mysterious-ravine-35179.herokuapp.com/orders?email=${user.email}`, {
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
            <h4 className='text-2xl text-center my-5'>Your Orders</h4>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.item}</td>
                                <td>{order.itemQuantity} Pieces</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    <button class="btn btn-secondary btn-sm mr-2">Pay</button>
                                    <label onClick={() => setCancelOrder(order)} htmlFor='cancelOrderModal' class="btn bg-red-300 btn-sm">Cancel</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <CancelOrder
                    cancelOrder={cancelOrder}
                    refetch={refetch}
                ></CancelOrder>
            }
        </div>
    );
};

export default MyOrders;
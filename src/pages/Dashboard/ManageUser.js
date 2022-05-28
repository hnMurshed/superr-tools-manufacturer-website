import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';

const ManageUser = () => {
    const navigate = useNavigate();
    const {data, isLoading, refetch} = useQuery('users', () => fetch('https://mysterious-ravine-35179.herokuapp.com/users').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const admins = data.filter(user => user?.role === 'admin');
    const users = data.filter(user => user?.role !== 'admin');

    const updateUserRole = (user, isAdmin) => {
        fetch(`https://mysterious-ravine-35179.herokuapp.com/update-user-role`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify({user: user, isAdmin: isAdmin})
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                navigate('/login');
                toast.error('Fobidden Access, only an admin can perform that');
            }
            return res.json();
        })
        .then(data => {
            if (data.modifiedCount) {
                refetch();
                toast.success('User role successfully changed')
            }
        })
    }
    return (
        <div>
            <h4 className='text-xl mt-5'>Admins</h4>
            <div className="divider"></div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.user}</td>
                                <td>Admin</td>
                                <td>
                                    <button onClick={() => updateUserRole(user.user, false)} class="btn bg-fuchsia-400 btn-sm mr-2 capitalize">Remove Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <h4 className='text-xl mt-5'>Users</h4>
            <div className="divider"></div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.user}</td>
                                <td>User</td>
                                <td>
                                    <button onClick={() => updateUserRole(user.user, true)} class="btn btn-secondary btn-sm mr-2">Make Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
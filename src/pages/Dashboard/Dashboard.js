import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, isLoading] = useAdmin(user);
    console.log(admin);
    return (
        <div className='custom-container py-8'>
            <h2 className='text-center text-3xl text-primary font-bold'>Welcome to your Dashboard</h2>
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label htmlFor="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-transparent text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='myorders'>My Orders</Link></li>
                        <li><Link to='writereview'>Write Review</Link></li>
                        <li><Link to='manageorder'>Manage Orders</Link></li>
                        <li><Link to='addproduct'>Add Product</Link></li>
                        <li><Link to='manageproducts'>Manage Products</Link></li>
                        <li><Link to='manageusers'>Manage Users</Link></li>
                        <li><Link to='myprofile'>My Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
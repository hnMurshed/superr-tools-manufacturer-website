import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='custom-container py-8'>
            <h2 className='text-center text-3xl font-bold text-secondary mb-8'>Our Blogs</h2>
            <div class="drawer drawer-mobile gap-x-5">
                <input id="drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label htmlFor="drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 bg-secondary lg:bg-transparent text-base-content text-white lg:text-slate-900">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to=''>How will you improve the performance of a React Application?</Link></li>
                        <li><Link to='question-2'>What are the different ways to manage a state in a React application?</Link></li>
                        <li><Link to='question-3'>How does prototypical inheritance work?</Link></li>
                        <li><Link to='question-4'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</Link></li>
                        <li><Link to='question-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Link></li>
                        <li><Link to='question-6'>What is a unit test? Why should write unit tests?</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
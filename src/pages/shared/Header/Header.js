import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {
    // react firebase hooks
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Deshboard</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <header className="bg-accent sticky top-0 z-50 text-white">
            <div className="navbar custom-container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl uppercase font-bold">Superr Tools</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div style={{ display: 'flex' }} className="w-10 rounded-full bg-slate-300 items-center justify-center">
                                    {
                                        user?.photoURL ? <img src={user?.photoURL} alt='' /> :
                                            <span className='text-3xl uppercase pb-[5px]'>{user?.displayName?.slice(0, 1)}</span>
                                    }
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-400 rounded-box w-52">
                                <li>
                                    <Link to='' className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><span onClick={() => signOut(auth)}>Logout</span></li>
                            </ul>
                        </div> :
                            <Link to='/login' className="btn btn-sm btn-outline btn-secondary border-2 rounded-md">Login</Link>
                    }
                    <label htmlFor="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
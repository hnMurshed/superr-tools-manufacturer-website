import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
    </>
    return (
        <header className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl uppercase">Superr Tools</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='' className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><span>Logout</span></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
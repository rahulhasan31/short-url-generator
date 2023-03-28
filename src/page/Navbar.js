import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-blue-600 ">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white">SHORTENER</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control flex">
          <div className='flex gap-3  text-white text-xl font-medium'> 
          <Link to={'/'}> HOME</Link>
           <Link to={'/short'}> SHORT</Link>
          </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
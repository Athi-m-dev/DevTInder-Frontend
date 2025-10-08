import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constans';
import axios from 'axios';
import { removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {      
    const user = useSelector((store) => store.user); // used for get the data from the store
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    const handlelogout = async () => {
        try {
            await axios.post(BASE_URL + "/logout" , {}, {withCredentials : true});
            dispatch(removeUser())
            return navigate("/login")
        } catch (err) {
           return;
        }
    }

    return (
        <div className="navbar bg-base-300 shadow-sm ">
            <div className="flex-1">
                <Link to = "/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>
            {user && <div className="flex gap-2">
                <h1 className='px-2'>Welcome {user.name}</h1>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.PhotoUrl} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to="/connections">Connections</Link></li>
                        <li><Link to="/requests">Requests</Link></li>
                        <li><Link to="/logout" onClick={handlelogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}
export default Navbar

import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css'
import { useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logout } = useAuth()
    const [isNavOpen, setIsNavOpen] = useState(false)
    

    const handleLogout = () => {
        logout()
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLinks =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/dashboard'><IoMdNotifications className="text-xl" /></Link></li>

            {user ? <li><Link onClick={handleLogout}>Logout</Link></li> : <li><Link to='/login'>Login</Link></li>}
        </>

    return (
        <div className='bg-red-300'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="text-red-950 font-bold text-xl">E <span className='text-green-500'>courier</span>
                    </Link>
                </div>
                <div className="navbar-center hidden items-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {user?.photoURL ?
                    <>
                        <div className="navbar-end cursor-pointer">
                            <a className="">
                                <div className="avatar flex flex-col">
                                    <div className="w-9 rounded-full">
                                       {user?.photoURL ? <img
                                        onClick={()=> setIsNavOpen(!isNavOpen) } 
                                        src={user?.photoURL} 
                                        alt=""/>
                                         : 
                                        <img
                                        onClick={()=> setIsNavOpen(!isNavOpen) } 
                                        alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        }
                                    </div>
                                    <div className={`${isNavOpen ? 'sidebar' : 'sidebar-off'}`}>
                                        <li><button>{user.displayName}</button></li>
                                        <li><Link 
                                        to='/dashboard'>
                                        <button>Dashboard</button>
                                        </Link></li>
                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </>
                    : ''}
            </div>
        </div>
    );
};

export default Navbar;
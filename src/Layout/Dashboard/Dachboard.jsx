import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {

    const { user } = useAuth()

    const delivaryMan = false

    const isAdmin = false


    return (
        <div className='flex'>
            <div className='w-56 bg-teal-200 min-h-screen'>

                {
                    // admin

                    isAdmin ? <>
                          <ul className='menu p-4 text-xl font-semibold'>
                            <li><Link to='/dashboard/allParcels'>All Parcels</Link></li>
                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                            <li><Link to='/dashboard/allDeliveryMan'>All Delivery Men</Link></li>
                            <li><Link to='/dashboard/statistics'>Statistics</Link></li>
                            <div className="divider">OR</div>
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                    </> :

                    user ? delivaryMan ? <>
                        <ul className='menu p-4 text-xl font-semibold'>
                            <li><Link to='/dashboard/myDeliveryList'>My Delivery List</Link></li>
                            <li><Link to='/dashboard/myReviews'>My Reviews</Link></li>
                            <div className="divider">OR</div>
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                    </> : 
                    // normal user
                    <>
                        <ul className='menu p-4 text-xl font-semibold'>
                            <li><Link to='/dashboard/bookParcel'>Book a Parcel</Link></li>
                            <li><Link to='/dashboard/myParcels'>My Parcels</Link></li>
                            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                            <div className="divider">OR</div>
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                    </>
                        // admin
                        : <>
                          
                        </>
                }
            </div>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;





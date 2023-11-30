import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyProfile = () => {
    const { user } = useAuth()

    const handleUpdate=()=>{
        console.log('handle update')
    }


    return (
        <div>
            <div className='p-2 text-center text-3xl font-semibold text-teal-600   border-teal-400 rounded-lg my-4'>
                <h1>Wellcome Back {user?.displayName}</h1>
            </div>

            <div className='flex justify-evenly'>
            <div className=''>
                <img src={user?.photoURL} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{user?.displayName}</h2>
                <p>{user?.email}</p>
            </div>
        </div>

            <div className='flex justify-center'>
            <button onClick={handleUpdate} className='p-2 text-lg font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200 w-1/3 border-4 border-teal-400 rounded-lg my-4'>Update Profile</button>
            </div>
        </div>
    );
};

export default MyProfile;
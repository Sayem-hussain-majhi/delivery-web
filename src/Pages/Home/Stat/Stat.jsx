import React, { useState } from 'react';
import useAxios from '../../../Hooks/useAxios';

const Stat = () => {
    const axiosURL = useAxios()
    const [bookings, setBookings] = useState(0)
    const [users, setUsers] = useState(0)
    axiosURL.get('/bookings')
    .then (res =>{
        setBookings(res.data.length)
     
    })
    axiosURL.get('/users')
    .then (res =>{
        setUsers(res.data.length)
       
    })


    return (
        <div className="stats shadow w-full">

            <div className="stat place-items-center">
                <div className="stat-title">Parcel Booked</div>
                <div className="stat-value">{bookings}</div>
                <div className="stat-desc">From January 1st </div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value text-secondary">{users}</div>
                
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Delivered</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default Stat;
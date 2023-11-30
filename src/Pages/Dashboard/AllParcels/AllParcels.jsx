import React from 'react';
import Heading from '../../../Components/Heading/Heading';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const AllParcels = () => {
    const axiosURL = useAxios()
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosURL.get('/bookings')
            return res.data
        }
    })


    const handleDelete = (booking) => {
        const id = booking._id
        console.log(id)

    }

    const handleChange = (evnet)=>{
        console.log(evnet.target.value)
        
    }






    return (
        <div>
            <Heading heading={'All Parcels'}></Heading>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>name</th>
                            <th>phone</th>
                            <th>booking Date</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map((booking, index) => <>
                                <tr>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {
                                            booking?.name == '' ? booking?.email : booking.name
                                        }
                                    </td>
                                    <td>
                                        {booking?.phone}
                                    </td>
                                    <td>
                                        {booking?.bookingDate}
                                    </td>
                                    <td>user</td>
                                    <td>
                                        
                                        <select onChange={handleChange} className="select select-bordered w-full ">
                                            <option disabled selected>{booking?.status ? 'Panding' :'Panding' }</option>
                                            <option>On The Way</option>
                                            <option>Deliverd</option>
                                        </select>
                                    </td>

                                    <td className=' space-x-2'>
                                        <input
                                            onClick={() => handleDelete(booking)} className='p-2 text-md font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200  border-2 border-teal-400 rounded-lg my-2' type="button" value="Delete" />


                                    </td>

                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllParcels;
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import Heading from "../../../Components/Heading/Heading";
import { useEffect } from "react";

const MyParcels = () => {
    const { user } = useAuth()
    const axiosURL = useAxios()

    const { data: myBookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const booking = await axiosURL.get(`/bookings/${user?.email}`)
            return booking.data

        }
    })





    // useEffect(() => {
    //     axiosURL.get(`/bookings/${user.email}`)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // }, [])

    // console.log(user.email)


    const handleDelete = async (id) => {
        useEffect(() => {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => console.log(res))
                .catch(error => console.log(error.message))
        }, [])
    }




    return (
        <div>
            <Heading heading={'Your Parcels'}></Heading>
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
                            <th>status</th>
                            {/* <th></th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myBookings?.map((booking, index) => <>
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
                                    <td>{booking?.status}</td>

                                    {booking?.status === 'panding' ? <td className=' space-x-2'>
                                        <input
                                            onClick={() => handleDelete(booking._id)} className='p-2 text-md font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200  border-2 border-teal-400 rounded-lg my-2' type="button" value="Delete" />


                                    </td> : 'On The Way'}

                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyParcels;
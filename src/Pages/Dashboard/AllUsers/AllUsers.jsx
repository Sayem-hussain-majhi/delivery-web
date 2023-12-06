import React from 'react';
import Heading from '../../../Components/Heading/Heading';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosURL = useAxios()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['usera'],
        queryFn: async () => {
            const res = await axiosURL.get('/users')
            return res.data
        }
    })

    

    const handleMakeAdmin=(user)=>{
        axiosURL.patch( `/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    
    
    const handleMakeDeliveryMan=(user)=>{
        
        axiosURL.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Delivery Man`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    // console.log(users)


    return (
        <div>
            <Heading heading={'All Users'}></Heading>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>email</th>
                            <th>name</th>
                            <th>Role</th>
                            {/* <th></th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index)=><>
                                 <tr>
                         <th>
                             <label>
                                 {index + 1}
                             </label>
                         </th>
                         <td>
                             <div className="flex items-center gap-3">
                                 <div className="avatar">
                                     <div className="mask mask-squircle w-12 h-12">
                                         <img src={user?.image} alt="user image" />
                                     </div>
                                 </div>
                             </div>
                         </td>
                         <td>
                             {user?.email}
                         </td>
                         <td>
                             {user?.name}
                         </td>
                         <td>user</td>

                         <td className=' space-x-2'>
                            { user.role === 'deliveryMan' ? 'Delivery Man' : <input
                            onClick={()=>handleMakeDeliveryMan(user)} className='p-2 text-md font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200  border-2 border-teal-400 rounded-lg my-2' type="button" value="Make Delivery Man" />}
                            
                            { user.role ==  'admin' ? ' Admin' : <input 
                            onClick={()=>handleMakeAdmin(user)} className='p-2 text-md font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200  border-2 border-teal-400 rounded-lg my-2' type="button" value="Make Admin" />}

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

export default AllUsers;
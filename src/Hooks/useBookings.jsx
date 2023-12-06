import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from './useAxios';

const useBookings = () => {

    const axiosURL = useAxios()

    const { data: bookings = [] , isPending , refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosURL.get('/bookings')
            return res.data
        }
    })


    return [bookings, isPending, refetch]
};

export default useBookings;

import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const axiosURL = useAxios()

    const { data: users = [] , isPending , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosURL.get('/users')
            return res.data
        }
    })

    



    return [users, isPending, refetch]
};

export default useUsers;
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';


const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosURL = useAxios()
    
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
        // console.log('asking or checking is admin', user)
        const res = await axiosURL.get(`/users/${user?.email}`);
           
        console.log(res.data);
        return res.data;
        }
    })
    return [isAdmin, isAdminLoading]
};



export default useAdmin;




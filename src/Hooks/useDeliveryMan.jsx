import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';



const useDeliveryMan = () => {
    const { user, loading } = useAuth();
    const axiosURL = useAxios()
    const { data: isDeliveryMan, isPending: isDeliveryManLoading } = useQuery({
        queryKey: [user?.email, 'deliveryMan'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosURL.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.deliveryMan;
        }
    })
    return [isDeliveryMan, isDeliveryManLoading]
};

export default useDeliveryMan;
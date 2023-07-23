import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    const { user } = useAuth();
    console.log(user);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],

        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/carts?email=${user?.email}`)
                console.log('res from axios', res);
                return res.data;
            }

        },
    })

    return [cart, refetch];
};

export default useCart;


 // enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        // return res.json();
        // },
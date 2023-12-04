import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCamps = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch,data: popularcamp = [] } = useQuery({
        queryKey: ['popularcamp'],
        queryFn: async() => {
            const res = await axiosSecure.get('/popularcamp')
            return res.data;
        }
    })
    return [popularcamp, refetch]
};

export default useCamps;
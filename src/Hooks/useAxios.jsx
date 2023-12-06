import axios from "axios";

const axiosURL = axios.create({
    baseURL: 'https://assignment-12-server-flax-ten.vercel.app'
    // baseURL: 'https://assignment-12-server-flax-ten.vercel.app'
})

const useAxios = () => {
    
    return axiosURL
};

export default useAxios;


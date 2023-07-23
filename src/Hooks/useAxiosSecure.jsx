import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from './useAuth';



const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // Create an Axios instance with a base URL
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000', // Replace with your base URL
    });

    // Intercept requests to inject the authorization header
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }),


            axiosSecure.interceptors.response.use(
                (response) => response,

                async (error) => {
                    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                        await logOut();
                        navigate('/logIn');
                    }
                    return Promise.reject(error);
                }
            );
    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;

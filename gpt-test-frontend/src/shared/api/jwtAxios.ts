import axios from 'axios';

import { useAuthStore } from '@/shared/store/useAuthStore';

const jwtAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

jwtAxios.interceptors.request.use(
    (config) => {
        const { token } = useAuthStore.getState();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default jwtAxios; 
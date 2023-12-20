import axios from 'axios';
import { useCookies } from '../hooks/useCookies';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    const { id } = useCookies();
    if (id) {
        config.headers.Authorization = `Bearer ${id}`;
    }
    return config;
})

export default instance; 
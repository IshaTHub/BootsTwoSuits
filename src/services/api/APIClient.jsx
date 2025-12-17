// src/services/api/APIClient.jsx
import axios from 'axios';

const APIClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
APIClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
APIClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/admin/login';
        }
        return Promise.reject(error);
    }
);

export default APIClient;
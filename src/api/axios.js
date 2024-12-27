import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export default apiClient;

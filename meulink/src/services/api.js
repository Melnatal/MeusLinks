import axios from 'axios';

export const key = '3e3030e1528d859773c51c2408c95da01c44ca6f';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
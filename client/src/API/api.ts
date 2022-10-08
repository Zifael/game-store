import axios, { AxiosRequestHeaders } from 'axios'


const API_URL = 'http://localhost:7000/'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL 
})

// We add a token to each request
$api.interceptors.request.use((config: any) => {
    config.headers.authorization =  `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api
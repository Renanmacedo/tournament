import axios from 'axios'

const BASE_URL = 'http://tournament.local:3001/api/'

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
})
instance.interceptors.request.use(request => {

    request.headers = {
        ...request.headers,
        'Content-Type': 'application/json',
        Accpet: 'application/json',
        'Access-Control-Allow-Headers': '*'
    }
    return request
})

export default instance

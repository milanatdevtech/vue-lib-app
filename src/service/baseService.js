import axios from 'axios';


const apiClient = axios.create({
    baseUrl: 'http://localhost:5092/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default class BaseService {
    constructor() {
        this.apiClient = apiClient;
    }

    setAuthToken(token) {
        apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } 
}
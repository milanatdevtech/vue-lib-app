import  BaseService from './baseService.js';

export default class AuthService extends BaseService {
    constructor() {
        super();
    }

    async login(url, data) {
        try {
            const response = await this.apiClient.post(url, data);
            this.setAuthToken(response.data.token);
            return response;
        }
        catch(error) {
            console.error('Error: ', error);
            throw error;
        }
    }
}
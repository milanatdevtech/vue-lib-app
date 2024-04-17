import  BaseService from './baseService.js';

export default class BooksService extends BaseService {
    constructor() {
        super();
    }

    async getAllBooks(url) {
        try {
            const response = await this.apiClient.get(url);
            return response;
        }
        catch(error) {
            console.error('Error: ', error);
            throw error;
        }
    }

    async post(url, data) {
        try {
       
            const response = await this.apiClient.post(url, data, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            });
            return response;
        }
        catch(error) {
            console.error('Error: ', error);
            throw error;
        }
    }
}

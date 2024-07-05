import axios from 'axios';

export default class Loader {
    baseUrl = 'https://front-assignment-api.2tapp.cc/api/';

    constructor(address: string) {
        this.baseUrl = `${this.baseUrl}${address}`;
    }

    async get() {
        try {
            const response = await axios.get(this.baseUrl, { });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }
}

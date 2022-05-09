import axios from 'axios';
const API_URL = 'https://airport-api.herokuapp.com/api';
export class UserServices{
    constructor(){
    }

    async createNewUser(user) {
        const url = `${API_URL}/user`;
        return await axios.post(url, user).then(response => response.data);
    }

    async assignUserToAirport(airportCode) {
        const url = `${API_URL}/api/contacts/${airportCode}`;
        return await axios.post(url).then(response => response.data);
    }
}
import axios from 'axios';
const API_URL = 'https://airport-api.herokuapp.com/api';
export class AirportServices{
    constructor(){
    }

    async getAllAirports() {
        const url = `${API_URL}/airports`;
        return await axios.get(url).then(response => response.data);
    }

    async addAirport(airport) {
        const url = `${API_URL}/airport`;
        return await axios.post(url, airport).then(response => response.data);
    }

}
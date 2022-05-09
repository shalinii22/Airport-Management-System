import axios from 'axios';
const API_URL = 'https://airport-api.herokuapp.com/api';
export class AirlinesServices{
    constructor(){
    }

    async getAllAirlines() {
        const url = `${API_URL}/airlines`;
        return await axios.get(url).then(response => response.data);
    }

    async getAirlinesByAirportCode(airportCode) {
        const url = `${API_URL}/airlines/${airportCode}`;
        return await axios.get(url).then(response => response.data);
    }

    async addAirlines(airlines) {
        const url = `${API_URL}/airlines`;
        return await axios.post(url, airlines).then(response => response.data);
    }

    async addAirlinesToAirport(airlinesCode, airportCode) {
        const url = `${API_URL}/airlines/${airlinesCode}`;
        return await axios.post(url, airportCode).then(response => response.data);
    }

}
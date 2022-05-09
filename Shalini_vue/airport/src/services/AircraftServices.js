import axios from 'axios';
const API_URL = 'https://airport-api.herokuapp.com/api';
export class AircraftServices{
    constructor(){
    }

    async addAircraft(aircraft) {
        const url = `${API_URL}/aircraft`;
        return await axios.post(url, aircraft).then(response => response.data);
    }

}
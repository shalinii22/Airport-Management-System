<template>
    <div class="container mt-60">
        <h1>List of all Airports</h1>
        <table border="5">
          <tr class="table-row">
              <td class="table-column"><u><b>Name</b></u></td>
              <td class="table-column">Code</td>
              <td class="table-column">Location</td>
              <td class="table-column">Country</td>
          </tr>
          <tr class="table-row" v-for="(airport, index) in airports" :key="index">
              <td class="table-column">{{airport.name}}</td>
              <td class="table-column">{{airport.code}}</td>
              <td class="table-column">{{airport.location}}</td>
              <td class="table-column">{{airport.country}}</td>
          </tr>
        </table>
  </div>
</template>

<script>
import { AirportServices } from "../services/AirportServices"

const airportService = new AirportServices();

export default {
  name: "ViewAirport",
  data() {
    return {
      airports: [],
    };
  },
  methods: {
    async getAirports() {
      this.airports = await airportService.getAllAirports();
    }
  },
  mounted() {
    this.getAirports()
  },
};
</script>

<style scoped>
.container {
  width: 65%;
  margin: 0px auto;
}
.table-row {
    padding: 10px;
}
.table-column {
    padding: 10px;
}
.mt-60 {
    margin-top: 60px;
}
</style>

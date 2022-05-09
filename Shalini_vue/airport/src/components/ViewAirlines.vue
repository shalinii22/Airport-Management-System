<template>
    <div class="container mt-60">
        <h1>List of all Airlines</h1>
      <table border="5">
          <tr class="table-row">
              <td class="table-column"><u><b>Name</b></u></td>
              <td class="table-column">Code</td>
              <td class="table-column">Origin</td>
              <td class="table-column">Country</td>
          </tr>
          <tr class="table-row" v-for="(airline, index) in airlines" :key="index">
              <td class="table-column">{{airline.name}}</td>
              <td class="table-column">{{airline.code}}</td>
              <td class="table-column">{{airline.origin}}</td>
              <td class="table-column">{{airline.country}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import { AirlinesServices } from "../services/AirlinesServices"

const airlinesServices = new AirlinesServices();

export default {
  name: "ViewAirlines",
  data() {
    return {
      airlines: [],
    };
  },
  methods: {
    async getAllAirlines() {
      this.airlines = await airlinesServices.getAllAirlines();
    }
  },
  mounted() {
    this.getAllAirlines()
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

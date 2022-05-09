<template>
    <div class="container mt-60">
        <form @submit.prevent="searchAirlines">
            <div class="mt-10">
            <label class="mr-30" for="code">Airport-Code</label>
            <input placeholder="eg: JKF, TIA..." type="text" id="code" name="code" />
            </div>
            <button class="btn" type="submit">
            Search
            </button>
        </form>
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
  name: "ViewAirlinesOfAnAirport",
  data() {
    return {
      airlines: [],
    };
  },
  methods: {
        async searchAirlines (submitEvent) {
            if (submitEvent && submitEvent.target && submitEvent.target.elements) {
                this.airlines = await airlinesServices.getAirlinesByAirportCode(submitEvent.target.elements.code.value);
            }
        }
  },
  mounted() {
    this.searchAirlines()
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

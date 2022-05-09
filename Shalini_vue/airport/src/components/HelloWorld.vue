<template>
  <div>
    <h1>Contacts ()</h1>

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>

          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airport in airports" v-bind:key="airport" v-bind:airport="airport">
          <th>{ { airport.name } }</th>

          <th>{ { airport.code } }</th>

          <td>{ { airport.numberOfRunways } }</td>

          <td>{ { airport.location } }</td>

          <td>{ { airport.country } }</td>

          <td>
          </td>
        </tr>
      </tbody>
    </table>
    <div></div>
  </div>
</template>

<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      airports: [],
      numberOfairports: 0,
    };
  },
  methods: {
    getAllAirports() {
      apiService.getAllAirports().then((data) => {
        this.airports = data.data;
        this.numberOfairports = data.count;
      });
    },
  },
  mounted() {
    this.getAllAirports();
  },
};
</script>

<style>
</style>

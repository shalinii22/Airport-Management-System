<template>
    <div class="container mt-60">
        Enter Airlines and Airport Code
        <form @submit.prevent="addAirlinesToAirport">
            <div class="mt-10">
            <label class="mr-30" for="airportCode">Airport-Code</label>
            <input type="text" id="airportCode" name="airportCode" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="airlinesCode">airlinesCode</label>
            <input type="text" id="airlinesCode" name="airlinesCode" />
            </div>
            <button class="btn" type="submit">
            Add
            </button>
        </form>
  </div>
</template>

<script>
import { AirlinesServices } from "../services/AirlinesServices"

const airlinesService = new AirlinesServices();

export default {
  name: "AddAirlinesToAirport",
  data() {
    return {
    };
  },
  methods: {
    addAirlinesToAirport (submitEvent) {
      if (submitEvent && submitEvent.target && submitEvent.target.elements) {
        this.formElements = submitEvent.target.elements;
        if (airlinesService.addAirlinesToAirport(this.formElements.airlinesCode.value, {
          airportCode: this.formElements.airportCode.value
        }) ) {
          alert('Airlines added successfully');
        } else {
          alert('Airlines could not be added');
        }
      }
    }
  },
  mounted() {
    this.addAirlinesToAirport();
  },
};
</script>

<style scoped>
.container {
  width: 65%;
  margin: 0px auto;
}
.green-color {
  color: greenyellow;
}
.mt-10 {
  margin-top: 10px;
}
.mr-30 {
  margin-right: 30px;
}
.mt-60 {
  margin-top: 60px;
}
.btn {
  margin-top: 20px;
  border-radius: 5px;
  min-width: 100px;
  min-height: 30px;
  background-color: #649cf5;
  color: white;
  cursor: pointer;
}
</style>

<template>
    <div class="container mt-60">
        Add Airport Details
        <form @submit.prevent="addNewAirport">
            <div class="mt-10">
            <label class="mr-30" for="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="code">Code</label>
            <input type="text" id="code" name="code" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="location">Location</label>
            <input type="text" id="location" name="location" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="country">Country</label>
            <input type="text" id="country" name="country" />
            </div>
            <button class="btn" type="submit">
            Add
            </button>
        </form>
  </div>
</template>

<script>
import { AirportServices } from "../services/AirportServices"

const airportService = new AirportServices();

export default {
  name: "AddAirport",
  data() {
    return {
    };
  },
  methods: {
    addNewAirport (submitEvent) {
      if (submitEvent && submitEvent.target && submitEvent.target.elements) {
        this.formElements = submitEvent.target.elements;
        if (airportService.addAirport({
          name: this.formElements.name.value,
          code: this.formElements.code.value,
          location: this.formElements.location.value,
          country: this.formElements.country.value,
        }) ) {
          alert('Airport added successfully');
        } else {
          alert('Airport could not be added');
        }
      }
    }
  },
  mounted() {
    this.addNewAirport();
  },
};
</script>

<style scoped>
.container {
  width: 65%;
  margin: 0px auto;
}
.vertical-centre{
  align-items: center;
} 
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
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

<template>
    <div class="container mt-60">
        Add Airlines Details
        <form @submit.prevent="addNewAirlines">
            <div class="mt-10">
            <label class="mr-30" for="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="code">Code</label>
            <input type="text" id="code" name="code" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="origin">Origin</label>
            <input placeholder="City, Kingdom, etc" type="text" id="origin" name="origin" />
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
import { AirlinesServices } from "../services/AirlinesServices"

const airlinesService = new AirlinesServices();

export default {
  name: "AddAirlines",
  data() {
    return {
    };
  },
  methods: {
    addNewAirlines (submitEvent) {
      if (submitEvent && submitEvent.target && submitEvent.target.elements) {
        this.formElements = submitEvent.target.elements;
        if (airlinesService.addAirlines({
          name: this.formElements.name.value,
          code: this.formElements.code.value,
          origin: this.formElements.origin.value,
          country: this.formElements.country.value,
        }) ) {
          alert('Airlines added successfully');
        } else {
          alert('Airlines could not be added');
        }
      }
    }
  },
  mounted() {
    this.addNewAirlines();
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

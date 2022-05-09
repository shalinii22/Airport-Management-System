<template>
    <div class="container mt-60">
        Add Aircraft Details
        <form @submit.prevent="addNewAircraft">
            <div class="mt-10">
            <label class="mr-30" for="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="uniqueId">Unique-Id</label>
            <input type="text" id="uniqueId" name="uniqueId" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="manufacturerName">Manufacturer-Name</label>
            <input type="text" id="manufacturerName" name="manufacturerName" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="weight">Weight</label>
            <input type="number" id="weight" name="weight" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="passengerCapacity">Passenger Capacity</label>
            <input type="number" id="passengerCapacity" name="passengerCapacity" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="fuelCapacity">Fuel Capacity</label>
            <input type="text" id="fuelCapacity" name="fuelCapacity" />
            </div>
            <div class="mt-10">
            <label class="mr-30" for="airlinesCode">Airlines-Code</label>
            <input type="text" id="airlinesCode" name="airlinesCode" />
            </div>
            <button class="btn" type="submit">
            Add
            </button>
        </form>
  </div>
</template>

<script>
import { AircraftServices } from "../services/AircraftServices"

const aircraftService = new AircraftServices();

export default {
  name: "AddAircraft",
  data() {
    return {
    };
  },
  methods: {
    addNewAircraft (submitEvent) {
      if (submitEvent && submitEvent.target && submitEvent.target.elements) {
        this.formElements = submitEvent.target.elements;
        if (aircraftService.addAircraft({
          name: this.formElements.name.value,
          uniqueId: this.formElements.uniqueId.value,
          manufacturerName: this.formElements.manufacturerName.value,
          weight: this.formElements.weight.value,
          passengerCapacity: this.formElements.passengerCapacity.value,
          fuelCapacity: this.formElements.fuelCapacity.value,
          airlinesCode: this.formElements.airlinesCode.value,
        }) ) {
          alert('Aircraft added successfully');
        } else {
          alert('Aircraft could not be added');
        }
      }
    }
  },
  mounted() {
    this.addNewAircraft();
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

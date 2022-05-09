<template>
  <div class="container mb-20">
    <center><h1>Welcome to Airport Management System</h1></center>
  </div>
  <center>
    <a class="btn" href="#/">User Registration</a>
    <a class="btn" href="#/airports">View All Airports</a>
    <a class="btn" href="#/airport/add">Add Airport</a> 
    <a class="btn" href="#/airlines/all">View all Airlines</a> 
    <a class="btn" href="#/airport/airlines">View Airlines based on Airport</a>
    <a class="btn" href="#/airlines/add">Add Airlines</a>
    <a class="btn" href="#/airlines/add/airport">Add Airlines To Airport</a>
    <a class="btn" href="#/aircraft/add">Add Aircraft</a>
    <component :is="currentView" />
  </center>
</template>

<script>
import UserRegistration from './components/UserRegistration.vue'
import ViewAirport from './components/ViewAirport.vue'
import AddAirport from './components/AddAirport.vue'
import ViewAirlines from './components/ViewAirlines.vue'
import ViewAirlinesOfAnAirport from './components/ViewAirlinesOfAnAirport.vue'
import AddAirlines from './components/AddAirlines.vue' 
import AddAirlinesToAirport from './components/AddAirlinesToAirport.vue'
import AddAircraft from './components/AddAircraft.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': UserRegistration,
  '/airports': ViewAirport,
  '/airport/add': AddAirport,
  '/airlines/all': ViewAirlines,
  '/airport/airlines': ViewAirlinesOfAnAirport,
  '/airlines/add': AddAirlines,
  '/airlines/add/airport': AddAirlinesToAirport,
  '/aircraft/add': AddAircraft
}

export default {
  name: 'App',
  components: {
    UserRegistration
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		this.currentPath=window.location.hash
		})
  }
}
</script>

<style>
.container {
  width: 65%;
  margin: 0px auto;
}
.mb-20 {
  margin-bottom: 20px;
}
.btn {
  margin: 5px;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  min-width: 100px;
  min-height: 30px;
  background-color: #649cf5;
  color: white;
  cursor: pointer;
}
</style>

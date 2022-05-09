<template>
    <div class="container mt-60">
      <h4>Enter User's Details</h4>
      <form @submit.prevent="createNewUser">
        <div class="mt-10">
          <label class="mr-30" for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="mt-10">
          <label class="mr-30" for="userName">UserName</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div class="mt-10">
          <label class="mr-30" for="password">Password</label>
        <input type="password" id="password" name="password" />
        </div>
        <div class="mt-10">
          <label class="mr-30" for="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <button class="btn" type="submit">
          Register
        </button>
      </form>
  </div>
</template>

<script>
import { UserServices } from "../services/UserServices"
const userService = new UserServices();

export default {
  name: "UserRegistration",
  data() {
    return {
    };
  },
  methods: {
    createNewUser (submitEvent) {
      if (submitEvent && submitEvent.target && submitEvent.target.elements) {
        this.formElements = submitEvent.target.elements;
        if (userService.createNewUser({
          name: this.formElements.name.value,
          userName: this.formElements.userName.value,
          email: this.formElements.email.value,
          password: this.formElements.password.value,
          airportCode: '',
        }) ) {
          alert('User added successfully');
        } else {
          alert('User could not be added');
        }
      }
    }
  },
  mounted() {
    this.createNewUser();
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

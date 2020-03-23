<template>
  <div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Edit</th>
          <th scope="col">Del</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <User :user="user" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import User from "./User";
export default {
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  components: {
    User
  },
  updated() {
    localStorage.setItem("users", JSON.stringify(this.$store.state.users));
  }
};
</script>

<style scoped>
button {
  border-radius: 50%;
  outline: none;
}
</style>

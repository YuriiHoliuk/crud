<template>
  <fragment>
    <td v-show="!isEditing">{{user.name}}</td>
    <td v-show="isEditing"><input type="text" v-model="user.name"></td>
    <td v-show="!isEditing">{{user.surname}}</td>
    <td v-show="isEditing"><input type="text" v-model="user.surname"></td>
    <td v-show="!isEditing">{{user.phone}}</td>
    <td v-show="isEditing"><input type="text" v-model="user.phone"></td>
    <td v-show="!isEditing">{{user.email}}</td>
    <td v-show="isEditing"><input type="text" v-model="user.email"></td>
    <td>
      <button 
        type="button"
        class="btn btn-warning"
        @click="editUser"
      >
        🖊
      </button>
    </td>
    <td>
      <button type="button"
        class="btn btn-danger"
        @click="() => delUser(user.id)"
      >
        ⚔
      </button>
    </td>
  </fragment>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      isEditing: false,
    }
  },
  methods: {
    delUser(id) {
      this.$store.state.users = this.$store.state.users.filter(user => user.id != id)
    },
    editUser() {
      this.isEditing = !this.isEditing;
    }
  },
  updated() {
    localStorage.setItem('users', JSON.stringify(this.$store.state.users));
  },
}
</script>

<style scoped>
  button {
    border-radius: 50%;
  }
</style>
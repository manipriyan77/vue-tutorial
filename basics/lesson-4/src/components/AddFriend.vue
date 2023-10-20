<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="enteredName" />
      <label for="phone">phone</label>
      <input type="text" id="phone" v-model="enteredPhone" />
      <label for="address">address</label>
      <input type="text" id="address" v-model="enteredAddress" />
    </div>
    <div><button>Add Contact</button></div>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredAddress: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-friend', this.enteredName, this.enteredPhone, this.enteredAddress);
      this.enteredName = '';
      this.enteredPhone = '';
      this.enteredAddress = '';
    },
  },
};
</script>

<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>Address: {{ address }}</li>
      <li>phone-number: {{ phoneNumber }}</li>
      <li>Favurite: {{ isFavourite }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ['name', 'address', 'phoneNumber'],
  props: {
    name: String,
    address: String,
    phoneNumber: String,
    isFavourite: String,
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: { id: 'mani', name: 'mani', address: 'Chennai' },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

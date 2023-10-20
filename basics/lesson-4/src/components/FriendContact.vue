<template>
  <li>
    <h2>{{ name }}{{ isFavourite ? '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
    <ul v-if="detailsAreVisible">
      <li>Address: {{ address }}</li>
      <li>phone-number: {{ phoneNumber }}</li>
      <li>Favourite: {{ isFavourite }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  //   props: ['name', 'address', 'phoneNumber'],
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    isFavourite: {
      type: Boolean,
      required: true,
    },
    validator: function (value) {
      return value === true || value === false;
    },
  },
  emits: ['toggle-favourite', 'delete'],
  //   emits: {
  //     'toggle-favourite': function (id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         console.warn('Id is missing');
  //         return false;
  //       }
  //     },
  //   },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavourite: this.$props.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      //   this.friendIsFavourite = !this.friendIsFavourite;
      this.$emit('toggle-favourite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>

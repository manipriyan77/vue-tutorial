<template>
  <ul>
    <LearningResource
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['resources'],
  components: { LearningResource },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

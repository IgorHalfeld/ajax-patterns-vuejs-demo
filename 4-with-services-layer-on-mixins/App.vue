<template>
  <div>
    <h1>Bank API</h1>
    <div v-for="statement in statements" :key="statement.id">
      <ul>
        <li>Id: {{statement.id}}</li>
        <li>Timestamp: {{statement.timestamp}}</li>
        <li>Value: {{statement.value}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import apiMixin from './apiMixin';

export default {
  data: () => ({
    statements: [],
  }),
  mixins: [apiMixin],
  async mounted() {
    const response = await this.getStatements();
    this.statements = response.data.data;
  },
}
</script>

<style>

</style>

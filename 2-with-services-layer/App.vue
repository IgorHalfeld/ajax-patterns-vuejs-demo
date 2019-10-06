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
import services from './services';

export default {
  data: () => ({
    statements: [],
  }),
  async mounted() {
    const response = await services.getStatements();
    this.statements = response.data.data;
  },
}
</script>

<style>

</style>

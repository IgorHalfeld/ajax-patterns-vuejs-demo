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
import { mapActions } from 'vuex';

export default {
  data: () => ({
    statements: [],
  }),
  async mounted() {
    const response = await this.api({
      entity: 'statement',
      action: 'getStatements',
      payload: {}
    });
    this.statements = response.data.data;
  },
  methods: mapActions(['api'])
}
</script>

<style>

</style>

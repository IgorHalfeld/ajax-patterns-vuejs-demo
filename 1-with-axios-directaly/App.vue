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
import axios from 'axios';

export default {
  data: () => ({
    statements: [],
  }),
  async mounted() {
    const options = {
      method: 'GET',
      url: 'https://banking-api-flask.herokuapp.com/statements',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzAyODI1OTQsIm5iZiI6MTU3MDI4MjU5NCwianRpIjoiYWRhYzRjYzktMzc0OC00NzIyLTk0NjctZGQwMDZkMGQ2MWNhIiwiZXhwIjoxNTcwMjg2MTk0LCJpZGVudGl0eSI6Imlnb3JAaWdvci5tZSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.Qw7wir9x9oEXPiEPtCioNk4_tbJFQoVOtwzBg7JhZmc'
      }
    }
    const response = await axios(options);
    this.statements = response.data.data;
  },
}
</script>

<style>

</style>

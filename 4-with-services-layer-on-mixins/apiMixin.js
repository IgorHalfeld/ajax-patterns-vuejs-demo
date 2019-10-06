import services from './services';

export default {
  methods: {
    getStatements() {
      return services.getStatements();
    }
  }
}
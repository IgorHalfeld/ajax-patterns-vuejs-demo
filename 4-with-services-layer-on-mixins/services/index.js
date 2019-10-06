import axios from 'axios';

export default {
  getStatements() {
    const options = {
      method: 'GET',
      url: 'https://banking-api-flask.herokuapp.com/statements',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzAyODI1OTQsIm5iZiI6MTU3MDI4MjU5NCwianRpIjoiYWRhYzRjYzktMzc0OC00NzIyLTk0NjctZGQwMDZkMGQ2MWNhIiwiZXhwIjoxNTcwMjg2MTk0LCJpZGVudGl0eSI6Imlnb3JAaWdvci5tZSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.Qw7wir9x9oEXPiEPtCioNk4_tbJFQoVOtwzBg7JhZmc'
      }
    };
    return axios(options);
  },
}
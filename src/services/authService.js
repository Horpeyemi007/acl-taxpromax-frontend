import axios from 'axios';

export default {
  async registerUser(userData) {
    await axios.post('http://localhost:3000/users', {
      id: Date.now().toString(),
      ...userData,
    });
  },
};

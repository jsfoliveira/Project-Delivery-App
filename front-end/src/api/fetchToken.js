import axios from 'axios';

async function fetchToken(token) {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instance.get('/token', {
      headers: { Authorization: token },
    });
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchToken;

// {
//   "id": 3,
//   "name": "Cliente Zé Birita",
//   "email": "zebirita@email.com",
//   "role": "customer",
//   "iat": 1663870936
// }

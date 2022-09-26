import axios from 'axios';

async function fetchCardOrder(token, userId) {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { Authorization: token, user: userId },
  });
  try {
    const result = await instance.get('/customerorder');
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchCardOrder;
import axios from 'axios';

async function fetchCardOrder(token, userId) {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instance.get(`/sales/${userId}`, {
      headers: { Authorization: token },
    });
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchCardOrder;

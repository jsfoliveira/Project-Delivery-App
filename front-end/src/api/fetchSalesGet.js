import axios from 'axios';

async function fetchSalesGet(token) {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instance.get(
      '/user/seller',
      {
        headers: { Authorization: token },
      },
    );
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchSalesGet;

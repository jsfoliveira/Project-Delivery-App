import axios from 'axios';

async function fetchGetAllUser(token) {
  const instace = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instace.get(
      '/users',
      {
        headers: { Authorization: token },
      },
    );
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchGetAllUser;

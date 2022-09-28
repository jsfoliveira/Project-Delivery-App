import axios from 'axios';

async function fetchRemoveUser(token, id) {
  const instace = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instace.delete(
      `/users/${id}`,
      {
        headers: { Authorization: token },
      },
    );
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchRemoveUser;

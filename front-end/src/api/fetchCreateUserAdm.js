import axios from 'axios';

async function fetchCreateUserAdm(token, obj) {
  const instace = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instace.post(
      '/users/adm',
      obj,
      { headers: { Authorization: token } },
    );
    return result;
  } catch (error) {
    return error.response;
  }
}
export default fetchCreateUserAdm;

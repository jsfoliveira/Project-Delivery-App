import axios from 'axios';

async function fetchImage(obj) {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
  try {
    const result = await instance.post('/images/skol_lata_350ml.jpg', obj);
    return result;
  } catch (error) {
    return error.response;
  }
}

export default fetchImage;

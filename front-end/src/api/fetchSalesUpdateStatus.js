import axios from 'axios';

const fetchSalesUpdateStatus = async (token, id, obj) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
  });
  try {
    const result = await instance.put(
      `/sales/${id}`,
      obj,
      {
        headers: { Authorization: token },
      },
    );
    return result;
  } catch (error) {
    return error.response;
  }
};

export default fetchSalesUpdateStatus;

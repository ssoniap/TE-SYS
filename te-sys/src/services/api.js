import axios from "axios";

const env = process.env;
const baseURL = env.REACT_APP_API_URL;

const login = async (data) => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_LOGIN}`;
  return await axios.post(url, data);
};

export default {
  login,
};

import axios from "axios";
import localStorage from "./localStorage";

const env = process.env;
const baseURL = env.REACT_APP_API_URL;

const login = async (data) => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_LOGIN}`;
  return await axios.post(url, data);
};

const setHeaders = () => {
  const token = localStorage.getToken();
  return {
    "access-token": token,
  };
};

const getUsers = async () => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_USER}`;
  return await axios.get(url, { headers: setHeaders() });
};

const getUserById = async (id) => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_USER}/${id}`;
  return await axios.get(url, { headers: setHeaders() });
};

const createUser = async (data) => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_USER}`;
  return await axios.post(url, data, { headers: setHeaders() });
};

const updateUser = async (id, data) => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_USER}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

const deleteUser = async (id) => {
  const url = `${baseURL}${env.REACT_APP_RESOURCE_USER}/${id}`;
  return await axios.delete(url, { headers: setHeaders() });
};

export default {
  login,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

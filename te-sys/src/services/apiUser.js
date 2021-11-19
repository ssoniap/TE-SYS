import axios from "axios";
import localStorage from "./localStorage";

const env = process.env;
const baseURL = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_USER}`;

const login = async (data) => {
  const url = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_LOGIN}`;
  return await axios.post(url, data);
};

const setHeaders = () => {
  const token = localStorage.getToken();
  return {
    "access-token": token,
  };
};

const getRoles = async () => {
  const url = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_ROLE}`;
  return await axios.get(url, { headers: setHeaders() });
};

const getUsers = async () => {
  const url = baseURL;
  return await axios.get(url, { headers: setHeaders() });
};

const getUserById = async (id) => {
  const url = `${baseURL}/${id}`;
  return await axios.get(url, { headers: setHeaders() });
};

const createUser = async (data) => {
  const url = baseURL;
  return await axios.post(url, data, { headers: setHeaders() });
};

const updateUser = async (id, data) => {
  const url = `${baseURL}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

const deleteUser = async (id) => {
  const url = `${baseURL}/${id}`;
  return await axios.delete(url, { headers: setHeaders() });
};

export default {
  login,
  getRoles,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

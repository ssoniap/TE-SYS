import axios from "axios";
import localStorage from "./localStorage";

const env = process.env;
const baseURL = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_EQUIPMENT}`;

const setHeaders = () => {
  const token = localStorage.getToken();
  return {
    "access-token": token,
  };
};

const getEquipments = async (params) => {
  const url = baseURL;
  return await axios.get(url, { headers: setHeaders(), params });
};

const getEquipmentById = async (id) => {
  const url = `${baseURL}/${id}`;
  return await axios.get(url, { headers: setHeaders() });
};

const createEquipment = async (data) => {
  const url = baseURL;
  return await axios.post(url, data, { headers: setHeaders() });
};

const updateEquipment = async (id, data) => {
  const url = `${baseURL}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

const deleteEquipment = async (id) => {
  const url = `${baseURL}/${id}`;
  return await axios.delete(url, { headers: setHeaders() });
};

export default {
  getEquipments,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};

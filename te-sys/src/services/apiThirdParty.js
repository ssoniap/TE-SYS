import axios from "axios";
import localStorage from "./localStorage";

const env = process.env;
const baseURL = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_THIRDPARTY}`;

const setHeaders = () => {
  const token = localStorage.getToken();
  return {
    "access-token": token,
  };
};

const getThirdParties = async (params) => {
  const url = baseURL;
  return await axios.get(url, { headers: setHeaders(), params });
};

const getThirdPartyById = async (id) => {
  const url = `${baseURL}/${id}`;
  return await axios.get(url, { headers: setHeaders() });
};

const createThirdParty = async (data) => {
  const url = baseURL;
  return await axios.post(url, data, { headers: setHeaders() });
};

const updateThirdParty = async (id, data) => {
  const url = `${baseURL}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

const deleteThirdParty = async (id) => {
  const url = `${baseURL}/${id}`;
  return await axios.delete(url, { headers: setHeaders() });
};

export default {
  getThirdParties,
  getThirdPartyById,
  createThirdParty,
  updateThirdParty,
  deleteThirdParty,
};

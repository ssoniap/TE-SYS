import axios from "axios";
import localStorage from "./localStorage";

const env = process.env;
const baseURL = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_EQUIPMENT_FAILURE}`;

const setHeaders = () => {
  const token = localStorage.getToken();
  return {
    "access-token": token,
  };
};

const updateFailure = async (id, data) => {
  const url = `${baseURL}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

const deleteFailure = async (id) => {
  const url = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_EQUIPMENT_FAILURE_DELETE}/${id}`;
  return await axios.delete(url, { headers: setHeaders() });
};

const sendEmail = async (data) => {
  const url = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_SEND_EMAIL}`;
  return await axios.post(url, data, { headers: setHeaders() });
};

export default {
  updateFailure,
  deleteFailure,
  sendEmail,
};

import axios from "axios";
import localStorage from "./localStorage";

const env = process.env;
const baseURL = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_EQUIPMENT_REVIEW}`;

const setHeaders = () => {
  const token = localStorage.getToken();
  return {
    "access-token": token,
  };
};

const updateReview = async (id, data) => {
  const url = `${baseURL}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

const deleteReview = async (id, data) => {
  const url = `${env.REACT_APP_API_URL}${env.REACT_APP_RESOURCE_EQUIPMENT_REVIEW_DELETE}/${id}`;
  return await axios.put(url, data, { headers: setHeaders() });
};

export default {
  updateReview,
  deleteReview,
};

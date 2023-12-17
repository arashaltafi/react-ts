import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL3,
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem('autorization') || undefined,
  },
  // withCredentials: true,
  withCredentials: false,
});

export default customAxios;
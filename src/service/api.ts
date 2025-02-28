import axios from "axios";

const api = axios.create({
  baseURL: 'http://10.0.3.3:4000/' // URL do backend
});

export default api;
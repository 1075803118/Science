import axios from 'axios'
import qs from 'qs'
import router from '../router'

let instance = axios.create({
  baseURL: 'http://47.94.156.220:8080/',
  timeout: 30000,
})
instance.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})
instance.interceptors.response.use((res) => {
  return res
})
export default instance

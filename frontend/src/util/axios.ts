import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Vue } from 'vue-property-decorator';
import EventBus from "@/util/EventBus";

const baseURL = '/api';

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // const token = Vuex.getters.getAccessToken;
  // if (token) config?.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    const { result, error } = data;
    return response;
  },
  (error) => {
    const { response } = error;
    const { status, data } = response;
    EventBus.$emit('Error',data.message);
    // Vue.$toast.open({
    //   message: data.message,
    //   type: 'error',
    //   duration: 5000,
    // });
    return response;
  },
);

export const ins = instance;

import axios, { AxiosResponse, AxiosError } from 'axios';

axios.defaults.baseURL = 'https://arashaltafi.ir/';

axios.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: AxiosError<any>) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        return response;
    },
    (error: AxiosError<any>) => {
        return Promise.reject(error);
    }
);

export default axios;
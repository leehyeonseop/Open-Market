import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from './constant';

const config: AxiosRequestConfig = {
    baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);

import axios, { AxiosRequestConfig } from 'axios';
import { User } from '../types';
import { baseUrl } from './constant';

export const getJWTHeader = (user: User) => {
    return { Authorization: `JWT ${user.token}` };
};

const config: AxiosRequestConfig = {
    baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);

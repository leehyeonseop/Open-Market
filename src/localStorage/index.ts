import { User } from '../types';

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeToken = () => {
    localStorage.removeItem('user');
};

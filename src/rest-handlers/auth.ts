import axios from 'axios';
import { User } from '../lib/types/general-types';
import { LoginPayload } from '../modules/login-form-module/types/general-types';

const request = axios.create({
    baseURL: 'http://localhost:3000'
});

const register = async (userInformation: User) => {
    const response = await request.post('/api/user', userInformation);
    return response.data;
};

const login = async (userInformation: LoginPayload) => {
    const formData = new FormData();
    Object.entries(userInformation).forEach(([key, value]) => {
        formData.append(key, value);
    });
    const response = await request.post('/api/user-auth/login', formData);
    return response.data;
};

const logout = async () => {
    const response = await request.post('/api/user-auth/logout');
    return response.data;
};

export { register, login, logout };

import axios from 'axios';
import {User} from "../lib/types/general-types";

const request = axios.create({
    baseURL: 'http://localhost:3000'
});

const getUser = async () => {
    const response = await request.get('/api/user/profile', {
        withCredentials: true
    });
    return response.data;
};

const updateUser = async (userInformation: User) => {
    const response = await request.put('/api/user', userInformation, {
        withCredentials: true
    });
    return response.data;
};

export { getUser, updateUser };

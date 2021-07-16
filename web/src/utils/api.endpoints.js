import axios from 'axios';
import { getLoggedUserToken } from './auth';

export const getProducts = () => {
    return axios
        .get(`${process.env.VUE_APP_BASE_API_URL}product`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            return res.data;
        }).catch(error => {
            return error.response;
        });
};

export const getProductImage = (uuid) => {
    return `${process.env.VUE_APP_BASE_API_URL}productImages/${uuid}`;
};

export const getUserInfo = () => {
    const token = getLoggedUserToken();
    return axios
        .get(`${process.env.VUE_APP_BASE_API_URL}user/profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then((res) => {
            return res;
        }).catch(error => {
            return error.response;
        });
};

export const registerOrder = (order) => {
    const token = getLoggedUserToken();
    return axios
        .post(`${process.env.VUE_APP_BASE_API_URL}order`, order, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then((res) => {
            return res;
        })
        .catch(error => {
            return error.response;
        });
};
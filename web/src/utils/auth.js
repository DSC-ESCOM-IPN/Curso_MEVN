import axios from 'axios';
import { app } from '../main'

export const setLoggedUserToken = (token) => {
    app.$cookies.set("loggedUserToken", token);
};

export const getLoggedUserToken = () => {
    return app.$cookies.get("loggedUserToken");
};

export const unsetLoggedUserToken = () => {
    app.$cookies.remove("loggedUserToken");
};

export const registerUser = (user) => {
    return axios
        .post(`${process.env.VUE_APP_BASE_API_URL}user/signup`, user, {
            headers: { 'Content-Type': 'application/json', }
        })
        .then((res) => {
            return res;
        })
        .catch(error => {
            return error.response;
        });
};

export const loginUser = (credentials) => {
    return axios
        .post(`${process.env.VUE_APP_BASE_API_URL}user/login`, credentials, {
            headers: { 'Content-Type': 'application/json', }
        })
        .then((res) => {
            return res;
        })
        .catch(error => {
            return error.response;
        });
};

export const logoutUser = (token) => {
    return fetch(`${process.env.VUE_APP_BASE_API_URL}user/logout`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    })
        .then((res) => {
            return res;
        })
        .catch(error => {
            return error.response;
        });
};

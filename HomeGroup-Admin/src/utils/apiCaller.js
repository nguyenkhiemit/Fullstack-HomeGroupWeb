import * as Config from "../constants/Config";
import axios from 'axios'

export const callApi = (endpoint, method = 'GET', body = null, headers = null) => {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: headers
    }).catch(err => {
        console.log(err);
    });
};

export const getApi = (endpoint, params = null, headers = null) => {
    return axios.get(`${Config.API_URL}/${endpoint}`, { params: params }).catch(err => {
        console.log(err);
    });
};

export const deleteApi = (endpoint, params = null, headers = null) => {
    return axios.delete(`${Config.API_URL}/${endpoint}`, { params: params }).catch(err => {
        console.log(err);
    });
};


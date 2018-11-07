import * as Config from "../constants/Config";
import axios from 'axios'

export function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    });
}

export const getApi = (endpoint, params = null, headers = null) => {
    return axios.get(`${Config.API_URL}/${endpoint}`, { params: params }).catch(err => {
        console.log(err);
    });
};

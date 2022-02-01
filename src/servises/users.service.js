import {JPH_BASE_URL} from '../config/constants/urls'
import axiosService from "./axios.service";

export const usersService = {
    getAll: () => axiosService(JPH_BASE_URL).get('/users').then(value => value.data)
}



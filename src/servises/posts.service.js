import {JPH_BASE_URL} from '../config/constants/urls'
import axiosService from "./axios.service";

export const postsService = {
    getAll: () => axiosService(JPH_BASE_URL).get('/posts').then(value => value.data)
}



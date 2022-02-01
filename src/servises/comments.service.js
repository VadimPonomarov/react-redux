import {JPH_BASE_URL} from '../config/constants/urls'
import axiosService from "./axios.service";

export const commentsService = {
    getAll: () => axiosService(JPH_BASE_URL).get('/comments').then(value => value.data)
}



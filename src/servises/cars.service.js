import {CARS_BASE_URL} from '../config/constants/urls'
import axiosService from "./axios.service";

export const carsService = {
    getAll: () => axiosService(CARS_BASE_URL).get('/cars').then(value => value.data),
    deleteById: (id) => axiosService(CARS_BASE_URL).delete(`/cars/${id}`).then(value => value.data),
    create: (obj) => axiosService(CARS_BASE_URL).post('/cars', obj).then(value => value.data)
}



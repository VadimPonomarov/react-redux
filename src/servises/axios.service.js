import axios from 'axios'

const axiosService = (url) => {
    return axios.create({
        baseURL: url
    })
}

export default axiosService
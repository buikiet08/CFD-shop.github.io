import axios from "axios";
const Api = axios.create({
    baseURL:'http://cfd-reactjs.herokuapp.com'
})

Api.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }
})

Api.interceptors.response.use((res) => {
    return res.data
}, (res) => {
    throw res.response.data
})
export default Api
import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getProducts() {
        return axios.get(`${apiUrl}/products`)
        .then((res) => res.data);
    },

    getProduct(id) {
        return axios.get(`${apiUrl}/products/${id}`)
        .then((res) => res.data);
    },
}
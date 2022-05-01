import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getProducts() {
        return axios.get(`${apiUrl}/products`).then((res) => res.data);
    },

    // getProducts() {
    //     return fetch(`${apiUrl}/products`).then((res) => res.json());
    // },
}
import axios from "axios";

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=742e797433f74f478ba9e61ec6ae1c24'
});

export default api;
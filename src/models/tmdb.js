import axios from 'axios'

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org'
});

export default tmdb;
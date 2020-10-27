import axios from "axios";

//Apikey from TMDB api
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'd386a44337bfe21b01b497692749ac4d';

const api = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: apiKey, 
  }
});

export default api;
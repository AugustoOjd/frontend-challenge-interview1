import axios from "axios";

export const apiShoes = axios.create({
    baseURL: 'https://storydots-backend-ow15.onrender.com/api/shoe/'
  });

export const apiBrands = axios.create({
    baseURL: 'https://storydots-backend-ow15.onrender.com/api/brand/'
  });

export const apiAuth = axios.create({
    baseURL: 'https://storydots-backend-ow15.onrender.com/api/auth/'
})


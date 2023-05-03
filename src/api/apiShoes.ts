import axios from "axios";
import Cookies from 'js-cookie'

export const apiShoes = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api/shoe/',
  });

export const apiBrands = axios.create({
    baseURL: 'http://localhost:8080/api/brand/',
  });

export const apiAuth = axios.create({
    baseURL: 'http://localhost:8080/api/auth/',
})


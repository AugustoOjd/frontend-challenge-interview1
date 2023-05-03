import axios from "axios";
import Cookies from 'js-cookie'

export const apiShoes = axios.create({
    baseURL: 'http://localhost:8080/api/shoe/',
    // headers: {
    //     xtoken: Cookies.get('xtoken'),
    // },
    // withCredentials: true
  });

export const apiBrands = axios.create({
    baseURL: 'http://localhost:8080/api/brand/',
    // headers: {
    //     xtoken: Cookies.get('xtoken'),
    // },
    // withCredentials: true
  });

export const apiAuth = axios.create({
    baseURL: 'http://localhost:8080/api/auth/',
    // headers: {
    //     xtoken: Cookies.get('xtoken'),
    // },
    // withCredentials: true
})


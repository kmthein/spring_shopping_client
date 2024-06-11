import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        contentType: 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
    }
})
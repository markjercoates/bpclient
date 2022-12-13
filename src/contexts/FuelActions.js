import axios from 'axios';

const API_URL =  "https://localhost:5000/api"

const action = axios.create({
    baseURL: API_URL
})

export const searchSites = async (text) => {
    const params = new URLSearchParams({
        search: text
    })
    const response = await action.get(`/site?${params}`)
    return response.data;
}

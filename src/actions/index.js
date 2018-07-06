import { TWEET, FETCH_TWEETS, SEARCH, LOGIN, FETCH_USERS } from "./types";
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

export const tweet = text => {
    const url = `${BASE_URL}/tweets`
    const data = { text: text } 
    const request = axios.post(url, data)
    return {
        type: TWEET,
        payload: text
    }
}

export const fetchTweets = () => {
    const url = `${BASE_URL}/tweets`
    const request = axios.get(url)
    return {
        payload: request,
        type: FETCH_TWEETS

    }
}

export const search = keyword => {
    return {
        payload: keyword,
        type: SEARCH
    }
}

export const fetchUsers = () => {
    const url = `${BASE_URL}/users`
    const request = axios.get(url)
    return {
        type: FETCH_USERS,
        payload: request
    }
}

export const login = data => {
    return {
        type: LOGIN
    }
}
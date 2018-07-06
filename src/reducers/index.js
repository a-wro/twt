import { TWEET, FETCH_TWEETS, SEARCH, LOGIN, FETCH_USERS } from "../actions/types";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

const tweetReducer = (state = {}, action) => {
    switch(action.type) {
        case TWEET:
            return Object.assign({}, state, action.payload)
        case FETCH_TWEETS:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}

const searchBarReducer = (state = '', action) => {
    switch(action.type) {
        case SEARCH:
            return action.payload
        default:
            return state
    }
}

const loginReducer = (state = false, action) => {
    switch(action.type) { 
        case LOGIN:
            return true
        default:
            return state
    }
}

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return Object.assign({}, state, action.payload.data)
        default:
            return state
    }
}
/*
const tagReducer = (state = null, action) => {
    switch(action.type) {
        case SELECT_ITEM:
            return action.payload
        default:
            return state
    }
}
*/
export default combineReducers({
    tweets: tweetReducer,
    form: formReducer,
    search: searchBarReducer,
    login: loginReducer,
    users: userReducer,
})  
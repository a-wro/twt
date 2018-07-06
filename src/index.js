import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
    <Provider store={store}> 
        <App /> 
    </Provider>,
    document.getElementById('app')
)
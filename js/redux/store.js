import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import talentSearchApp from './reducers'


let store = createStore(talentSearchApp,
    {keywords: ['c++']},
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
    ))

export default store
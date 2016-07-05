import {createStore} from 'redux'
import talentSearchApp from './reducers'


let store = createStore(talentSearchApp, {keywords: ['c++']})

export default store
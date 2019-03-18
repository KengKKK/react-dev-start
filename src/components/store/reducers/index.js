import { combineReducers } from 'redux'
import dataReducer from './data.reducer'

const root = combineReducers({
    data: dataReducer,
})

export default root
import { combineReducers } from 'redux'
import eventReducer from './event.reducer'

const root = combineReducers({
    event: eventReducer,
})

export default root
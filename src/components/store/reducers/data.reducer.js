
import { GET_DATA, SET_DATA } from '../action/data.action'

const initState = {
    data: {},
    get: {
        fname: 'Hello',
        lname: 'Redux'
    }
}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, get: action.payload };
        // case GET_DATA:
        //     return { ...state, data: action.payload };
        case SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state
    }
}

export default dataReducer
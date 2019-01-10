
import { GET_EVENT } from '../action/event.action'

const initState = {
    data: [],
}

const evnetReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state
    }
}

export default evnetReducer
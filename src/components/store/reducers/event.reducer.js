
import { GET_EVENT } from '../action/event.action'

const initState = {
    data: [
        {key: 1, value: 'Hello' },
        {key: 2, value: 'Mars' }
    ],
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
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'


export const getData = () => {
    return (dispatch) => {
        return {
            type: GET_DATA,
            payload: {}
        }
    }
}

export const setData = (data) => {
    return (dispatch) => {
        return dispatch(
            {
                type: SET_DATA,
                payload: data
            }
        )
    }
}
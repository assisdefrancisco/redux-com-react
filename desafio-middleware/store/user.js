import getLocalStorage from "./helper/getLocalStorage.js";

const USER_FETCH_STARTED = 'user/FETCH_STARTED';
const USER_FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const USER_FETCH_ERROR = 'user/FETCH_ERROR';

const userFetchStarted = () => ({ type: USER_FETCH_STARTED });
const userFetchSuccess = (user) => ({ type: USER_FETCH_SUCCESS, payload: user });
const userFetchError = (message) => ({ type: USER_FETCH_ERROR, payload: message });

export const userFetch = (token) => async(dispatch) => {
    try {
        dispatch(userFetchStarted());
        const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'GET',
            headers: {               
               Authorization: 'Bearer ' + token
            },            
        });
        const data = await response.json();
        dispatch(userFetchSuccess(data))
    } catch(error) {
        dispatch(userFetchError(error.message));
    }
}

const initialState = {
    loading: false,
    data: null,
    error: null
}

function user(state = initialState, action) {
    switch(action.type) {
        case USER_FETCH_STARTED:
            return {...state, loading: true };
        case USER_FETCH_SUCCESS:
            return { data: action.payload, loading: false, error: null };
        case USER_FETCH_ERROR:
            return { data: null, loading: false, error: action.payload };
        case 'INCREMENTAR':
            return state + 1;
        default:
            return state;
    }
}


export default user;
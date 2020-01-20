// Function to decide what happens to state based on an action.

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_USER,
    SET_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS
} from '../types';

// GithubState dispaches actions here, ad depending on the TYPE it does something, maybe with a payload...
export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token); // saving the token to headings
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL: // both these cases do the same thing
        case AUTH_ERROR: // both these cases do the same thing
            localStorage.removeItem('token'); // removing any tokens from storage
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload // setting error in the payload to the one in msg in users.js
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

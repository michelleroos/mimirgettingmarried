import * as SessionAPIUtil from "../util/session_api_util";

// ACTION CONSTANTS
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_ERRORS = "RESET_ERRORS";

// ACTION CREATORS
const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    }
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    }
};

const clearErrors = () => {
    return {
        type: RESET_ERRORS
    }
}

// THUNK ACTION CREATORS
export const signUp = (user) => (dispatch) => {
    return SessionAPIUtil.signUp(user)
        .then(
            (res) => dispatch(receiveCurrentUser(res)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
};

export const logIn = (user) => (dispatch) => {
    return SessionAPIUtil.logIn(user)
        .then(
            (res) => dispatch(receiveCurrentUser(res)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
};

export const logOut = () => (dispatch) => {
    return SessionAPIUtil.logOut()
        .then((res) => dispatch(logoutCurrentUser()))
};

export const resetErrors = () => (dispatch) => {
    return dispatch(clearErrors());
}
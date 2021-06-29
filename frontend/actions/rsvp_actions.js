import * as RSVPAPIUtil from "../util/rsvp_util";

// ACTION CONSTANTS
export const RECEIVE_RSVP = 'RECEIVE_RSVP';

// ACTION CREATORS
const receiveRSVP = (info) => {
    return {
        type: RECEIVE_RSVP,
        info: info
    }
};

// THUNK ACTION CREATORS
export const RSVP = (info) => (dispatch) => {
    return RSVPAPIUtil.rsvp(info)
        .then(
            (res) => dispatch(receiveRSVP(res)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
};
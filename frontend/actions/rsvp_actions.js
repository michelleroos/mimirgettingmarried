import * as RSVPAPIUtil from "../util/rsvp_util";

// ACTION CONSTANTS
export const RECEIVE_RSVP = 'RECEIVE_RSVP';
export const RECEIVE_RSVP_ERRORS = 'RECEIVE_RSVP_ERRORS';

// ACTION CREATORS
const receiveRSVP = (info) => {
  return {
    type: RECEIVE_RSVP,
    info: info
  }
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_RSVP_ERRORS,
    errors: errors
  }
};

// THUNK ACTION CREATORS
export const sendRSVP = (info) => (dispatch) => {
  console.log(info);
  return RSVPAPIUtil.rsvp(info)
    .then(
      (res) => dispatch(receiveRSVP(res)),
      (err) => dispatch(receiveErrors(err.responseJSON)))
};
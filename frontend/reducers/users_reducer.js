// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RSVP, RECEIVE_RSVP_ERRORS } from '../actions/rsvp_actions';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  user: null
});

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { user: action.currentUser.user });
      return { user: action.currentUser.user };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default usersReducer;
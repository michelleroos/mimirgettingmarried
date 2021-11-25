import * as UserAPIUtil from '../util/user_api'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const getUserAction = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  }
}

export const getUser = (userId) => (dispatch) => {
  return UserAPIUtil.getUser(userId)
    .then(
      (res) => dispatch(getUserAction(res)))
  // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}
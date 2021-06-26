import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const sessionReducer = combineReducers({
    session: sessionErrorsReducer
});

export default sessionReducer;
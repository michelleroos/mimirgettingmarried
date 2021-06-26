import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signUp',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signUp(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

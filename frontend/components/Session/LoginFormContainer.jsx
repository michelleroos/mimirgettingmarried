import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'log in',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(logIn(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

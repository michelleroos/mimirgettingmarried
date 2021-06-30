import { connect } from 'react-redux';
import React from 'react';
import RSVPContainer from './rsvp';
import { sendRSVP } from '../actions/rsvp_actions';

const mapStateToProps = () => {
    return {
        // currentUser: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sendRSVP: (info) => dispatch(sendRSVP(info)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RSVPContainer);

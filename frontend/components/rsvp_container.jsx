import { connect } from 'react-redux';
import React from 'react';
import RSVPContainer from './rsvp';
import { RSVP } from '../actions/rsvp_actions';

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        RSVP: (info) => dispatch(RSVP(info)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RSVPContainer);

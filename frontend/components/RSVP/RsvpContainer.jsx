import { connect } from 'react-redux';
import React from 'react';
import RSVPContainer from './Rsvp';
import { sendRSVP } from '../../actions/rsvp_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sendRSVP: (info) => dispatch(sendRSVP(info)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RSVPContainer);

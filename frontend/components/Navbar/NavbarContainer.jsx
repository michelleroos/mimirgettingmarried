import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Navbar from './Navbar';

const mapStateToProps = ({ session, entities: { user } }) => {
    return {
        // currentUser: user[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

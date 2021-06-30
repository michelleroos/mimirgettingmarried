import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Navbar from './Navbar';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id],
        route: ownProps.location
    };
};

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

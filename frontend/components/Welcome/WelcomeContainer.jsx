import { connect } from 'react-redux';
import Welcome from './Welcome';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id],
        pathname: ownProps.location.pathname
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

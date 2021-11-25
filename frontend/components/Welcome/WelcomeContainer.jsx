import { connect } from 'react-redux';
import Welcome from './Welcome';

const mapStateToProps = ({ session, entities: { user } }, ownProps) => {
    return {
        currentUser: user[session.id],
        pathname: ownProps.location.pathname
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

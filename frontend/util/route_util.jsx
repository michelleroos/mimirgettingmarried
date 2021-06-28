import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// CANNOT be logged in to view
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

// MUST be logged in to view
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);

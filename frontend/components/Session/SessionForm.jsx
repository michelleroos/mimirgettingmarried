import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="arch">
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/terracotta-abstract-29-modern-contemporary-art-abstract-organic-shapes-brown-arches-minimal-studio-grafiikka.jpg" />
                </div>
                <div className="session-content">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="session-title">
                            Please {this.props.formType} or {this.props.navLink}.
                        </h2>
                        <div className="session-errors">
                            {this.renderErrors()}
                        </div>
                        <br />

                        <div className="session-input-div email">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="session-header">
                                <h5>
                                    Email
                                </h5>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="session-input"
                                    />
                            </div>
                        </div>

                        <div className="session-input-div password focus">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="session-header">
                                <h5>
                                    Password
                                </h5>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="session-input"
                                />
                            </div>
                        </div>
                        <a href="#" className="forgot">Forgot Password?</a>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;

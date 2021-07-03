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
                <div className="session-form-box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="session-form">
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                            <br />

                            <div className="input-div email">
                                <i className="fas fa-user"></i>
                                <label>Email:
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                    />
                                </label>
                            </div>

                            <br />

                            <div className="input-div password">
                                <i className="fas fa-lock"></i>
                                <label>Passcode:
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />
                                </label>
                            </div>

                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;

import React from 'react';
import { Link } from 'react-router-dom';

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
      <div id="session-container">
        <form onSubmit={this.handleSubmit}>

          <h1 className="session-title">
            Sign in using your email and the passcode which was provided to you by email or return <Link to="/">home</Link>.
          </h1>

          <div className="session-errors">
            {this.renderErrors()}
          </div>

          <label>
            <input
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update('email')} />
          </label>

          <label>
            <input
              type="password"
              value={this.state.password}
              placeholder="Passcode"
              onChange={this.update('password')} />
          </label>

          <div className="session-actions">
            <button id="arrow-btn"><i className="fas fa-arrow-right"></i></button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
